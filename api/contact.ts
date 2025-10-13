import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { name, email, message, linkedin, resume_url } = req.body || {};
  if (!name || !email || !message) return res.status(400).json({ error: "Missing fields" });

  // Simple spam honeypot: block if hidden field is filled
  if ((req.body as any)._hp) return res.status(200).json({ ok: true });

  // Send email via Resend (or your provider)
  const apiKey = process.env.RESEND_API_KEY!;
  const to = process.env.CONTACT_TO!; // e.g. contact@nasken.ai

  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
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

  if (!r.ok) return res.status(500).json({ error: "Email send failed" });
  return res.status(200).json({ ok: true });
}
