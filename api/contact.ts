export const config = {
  runtime: "nodejs", // ensures Node APIs like process.env work normally
};

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Parse JSON body
  const body = await request.json().catch(() => null);

  const { name, email, message, linkedin, resume_url, _hp } = body || {};

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "Missing fields" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Simple honeypot check
  if (_hp) {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Email provider setup
  const apiKey = process.env.RESEND_API_KEY!;
  const to = process.env.CONTACT_TO!; // your inbox (contact@nasken.ai)

  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: "Nasken Health <no-reply@nasken.ai>",
      to,
      subject: "New contact submission",
      html: `
        <h3>New Contact</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>LinkedIn:</b> ${linkedin || "-"}</p>
        <p><b>Resume:</b> ${resume_url || "-"}</p>
        <p><b>Message:</b><br/>${(message || "").replace(/\n/g, "<br/>")}</p>
      `,
    }),
  });

  if (!r.ok) {
    return new Response(JSON.stringify({ error: "Email send failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
