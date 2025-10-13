// src/components/Newsletter.tsx
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="bg-ink-900 text-white py-16">
      <div className="max-w-3xl mx-auto text-center px-6">
        <Mail className="w-10 h-10 mx-auto mb-4 text-leaf-400" />
        <h2 className="text-3xl font-semibold mb-3">Subscribe to our Newsletter</h2>
        <p className="text-white/80 mb-8">
          Stay updated on Nasken Health’s research, product releases, and digital health insights.
        </p>

        <form
          action="https://formspree.io/f/mayvlxyz" // replace with your Formspree or backend endpoint
          method="POST"
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
            className="rounded-lg bg-white text-ink-900 px-6 py-3 font-medium hover:bg-gray-100 transition"
          >
            Subscribe
          </button>
        </form>

        <p className="text-xs text-white/50 mt-4">
          By subscribing, you agree to receive occasional updates. You can unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
