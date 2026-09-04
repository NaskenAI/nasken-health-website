import { useState } from "react";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

export default function Careers() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    const data = new FormData(event.currentTarget);
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          linkedin: data.get("linkedin"),
          message: data.get("message"),
          _hp: data.get("_hp"),
        }),
      });

      const payload = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(payload?.error || "Something went wrong sending your message.");
        setStatus("error");
        return;
      }

      setStatus("sent");
    } catch {
      setError("Something went wrong sending your message.");
      setStatus("error");
    }
  };

  return (
    <main className="bg-white text-ink-900">

      {/* Header */}
      <section className="section py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-3">
          Careers
        </h1>
        <p className="text-ink-900/70 max-w-2xl mx-auto">
          No current openings. You can still share your LinkedIn profile, and we’ll reach out if there’s a fit.
        </p>
      </section>

      {/* Submission form */}
      <section className="section pb-20 max-w-3xl mx-auto">
        {status === "sent" ? (
          <div className="rounded-lg border border-slate-300 p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Thanks — we have your details.</h2>
            <p className="text-ink-900/70">
              We will reach out if there is a fit. For anything urgent, email{" "}
              <a
                href="mailto:contact@nasken.ai"
                className="text-leaf-600 hover:text-leaf-700 underline"
              >
                contact@nasken.ai
              </a>
              .
            </p>
          </div>
        ) : (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <input type="text" name="_hp" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />

          <div>
            <label className="block text-sm text-ink-900/70 mb-1">Full name *</label>
            <input
              name="name"
              required
              className="w-full rounded-lg border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-leaf-400"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm text-ink-900/70 mb-1">Email *</label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-lg border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-leaf-400"
              placeholder="you@company.com"
            />
          </div>

          <div>
            <label className="block text-sm text-ink-900/70 mb-1">LinkedIn Profile *</label>
            <input
              name="linkedin"
              required
              className="w-full rounded-lg border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-leaf-400"
              placeholder="https://www.linkedin.com/in/username"
            />
          </div>

          <div>
            <label className="block text-sm text-ink-900/70 mb-1">Notes</label>
            <textarea
              name="message"
              rows={6}
              className="w-full rounded-lg border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-leaf-400"
              placeholder="Tell us about your interests, skills, or goals."
            />
          </div>

          <p className="text-sm text-ink-900/70">
            By submitting you agree to our{" "}
            <Link to="/privacy" className="text-leaf-600 hover:text-leaf-700 underline">
              Privacy Policy
            </Link>.
          </p>

          {status === "error" && (
            <p role="alert" className="text-sm text-red-700">
              {error} Please email us directly at{" "}
              <a href="mailto:contact@nasken.ai" className="underline">
                contact@nasken.ai
              </a>
              .
            </p>
          )}

          <div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center rounded-lg border-2 border-ink-900 px-5 py-3 text-ink-900 hover:bg-ink-900 hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending…" : "Submit"}
            </button>
          </div>
        </form>
        )}

        <p className="mt-6 text-sm text-ink-900/70">
          Prefer email? Send your LinkedIn profile or message to{" "}
          <a
            href="mailto:contact@nasken.ai"
            className="text-leaf-600 hover:text-leaf-700 underline"
          >
            contact@nasken.ai
          </a>
          .
        </p>
      </section>

      <Footer />
    </main>
  );
}
