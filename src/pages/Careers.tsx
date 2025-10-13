// src/pages/Careers.tsx
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

export default function Careers() {
  return (
    <main className="bg-white text-ink-900">
      {/* Header */}
      <section className="section py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-3">
          Careers
        </h1>
        <p className="text-ink-900/70 max-w-2xl mx-auto">
          No current openings. You can still share your resume and we’ll reach out if there’s a fit.
        </p>
      </section>

      {/* Submission form */}
      <section className="section pb-20 max-w-3xl mx-auto">
        <form
          action="https://formspree.io/f/mayvlxyz" /* replace with your Formspree endpoint */
          method="POST"
          className="grid grid-cols-1 gap-4"
        >
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
            <label className="block text-sm text-ink-900/70 mb-1">LinkedIn</label>
            <input
              name="linkedin"
              className="w-full rounded-lg border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-leaf-400"
              placeholder="https://www.linkedin.com/in/username"
            />
          </div>

          <div>
            <label className="block text-sm text-ink-900/70 mb-1">Resume URL *</label>
            <input
              name="resume_url"
              required
              className="w-full rounded-lg border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-leaf-400"
              placeholder="Link to PDF or portfolio"
            />
          </div>

          <div>
            <label className="block text-sm text-ink-900/70 mb-1">Notes</label>
            <textarea
              name="message"
              rows={6}
              className="w-full rounded-lg border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-leaf-400"
              placeholder="Role interest, timeline, location, etc."
            />
          </div>

          <p className="text-sm text-ink-900/70">
            By submitting you agree to our{" "}
            <Link to="/privacy" className="text-leaf-600 hover:text-leaf-700 underline">
              Privacy Policy
            </Link>.
          </p>

          <div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg border-2 border-ink-900 px-5 py-3 text-ink-900 hover:bg-ink-900 hover:text-white transition"
            >
              Submit resume
            </button>
          </div>
        </form>

        {/* Email fallback */}
        <p className="mt-6 text-sm text-ink-900/70">
          Prefer email? Send your resume to{" "}
          <a href="mailto:contact@nasken.ai" className="text-leaf-600 hover:text-leaf-700 underline">
            contact@nasken.ai
          </a>
          .
        </p>
      </section>

      <Footer />
    </main>
  );
}
