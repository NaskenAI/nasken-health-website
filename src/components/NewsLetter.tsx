// src/components/Newsletter.tsx
import { useState } from "react";
import { Mail } from "lucide-react";

const Newsletter = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    const data = new FormData(event.currentTarget);
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Newsletter subscriber",
          email: data.get("email"),
          message: "Requested newsletter updates.",
        }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-ink-900 text-white py-16">
      <div className="max-w-3xl mx-auto text-center px-6">
        <Mail className="w-10 h-10 mx-auto mb-4 text-leaf-400" />
        <h2 className="text-3xl font-semibold mb-3">Subscribe to our Newsletter</h2>
        <p className="text-white/80 mb-8">
          Stay updated on Nasken Health’s research, product releases, and digital health insights.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="w-full sm:w-2/3 rounded-lg border border-white/20 bg-white/10 p-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-leaf-400"
          />
          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className="rounded-lg bg-white text-ink-900 px-6 py-3 font-medium hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Subscribing…" : status === "sent" ? "Subscribed" : "Subscribe"}
          </button>
        </form>

        {status === "error" && (
          <p role="alert" className="text-sm text-red-300 mt-4">
            We could not sign you up. Please email{" "}
            <a href="mailto:contact@nasken.ai" className="underline">
              contact@nasken.ai
            </a>
            .
          </p>
        )}

        <p className="text-xs text-white/50 mt-4">
          By subscribing, you agree to receive occasional updates. You can unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
