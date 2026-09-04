export const config = {
  runtime: "nodejs",
};

const LIMITS = {
  name: 100,
  email: 200,
  linkedin: 300,
  resume_url: 300,
  message: 5000,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const FROM_ADDRESS = "Nasken Health <no-reply@nasken.ai>";

/**
 * Per-IP rate limiting held in module memory.
 *
 * Best-effort by design: serverless instances are per-region and recycled, so
 * a determined sender can get more than RATE_MAX through by hitting cold
 * instances. It exists to stop casual form spam alongside the honeypot, not
 * to be a security boundary.
 */
const RATE_WINDOW_MS = 60 * 60 * 1000;
const RATE_MAX = 5;
const hits = new Map<string, { count: number; resetAt: number }>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);

  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    if (hits.size > 5000) {
      for (const [key, value] of hits) {
        if (now > value.resetAt) hits.delete(key);
      }
    }
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_MAX;
}

function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

function str(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  const body = await request.json().catch(() => null);
  if (typeof body !== "object" || body === null) {
    return json({ error: "Malformed request body" }, 400);
  }

  const fields = body as Record<string, unknown>;

  // Honeypot. Report success so a bot has no signal to tune against.
  if (str(fields._hp) !== "") {
    return json({ ok: true }, 200);
  }

  const name = str(fields.name);
  const email = str(fields.email);
  const linkedin = str(fields.linkedin);
  const resume_url = str(fields.resume_url);
  const message = str(fields.message);

  const errors: string[] = [];
  if (!name) errors.push("Name is required.");
  if (!email) errors.push("Email is required.");
  else if (!EMAIL_RE.test(email)) errors.push("Email format is invalid.");
  if (!message) errors.push("Message is required.");

  if (name.length > LIMITS.name) errors.push("Name is too long.");
  if (email.length > LIMITS.email) errors.push("Email is too long.");
  if (linkedin.length > LIMITS.linkedin) errors.push("LinkedIn URL is too long.");
  if (resume_url.length > LIMITS.resume_url) errors.push("Resume URL is too long.");
  if (message.length > LIMITS.message) errors.push("Message is too long.");

  if (errors.length > 0) {
    return json({ error: errors.join(" ") }, 400);
  }

  if (rateLimited(clientIp(request))) {
    return json(
      { error: "Too many messages from this address. Please try again later." },
      429
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;

  if (!apiKey || !to) {
    console.error(
      "Contact form is not configured: RESEND_API_KEY and CONTACT_TO must both be set."
    );
    return json({ error: "The contact form is not configured right now." }, 500);
  }

  // Sent as plain text, so nothing submitted is ever interpreted as markup.
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `LinkedIn: ${linkedin || "-"}`,
    `Resume: ${resume_url || "-"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to,
        reply_to: email,
        subject: `New contact submission from ${name}`,
        text,
      }),
    });

    if (!res.ok) {
      console.error(`Resend rejected the send (${res.status}): ${await res.text()}`);
      return json({ error: "We could not send your message." }, 502);
    }
  } catch (err) {
    console.error("Resend request failed:", err);
    return json({ error: "We could not send your message." }, 502);
  }

  return json({ ok: true }, 200);
}
