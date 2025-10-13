// src/pages/Contact.tsx
import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <main className="bg-white text-ink-900">
      {/* Header */}
      <section className="section py-16">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2">
          Contact Us
        </h1>
        <p className="text-ink-900/70">Get in touch with our team.</p>
      </section>

      {/* Info + Form */}
      <section className="section pb-16 grid md:grid-cols-2 gap-12 items-start">
        {/* Left column */}
        <div className="space-y-8">
          <div>
            <div className="text-xs uppercase tracking-wide text-ink-900/60 mb-2">Email</div>
            <a
              href="mailto:contact@nasken.ai"
              className="inline-flex items-center gap-2 text-leaf-600 hover:text-leaf-700"
            >
              <Mail className="w-5 h-5" />
              contact@nasken.ai
            </a>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wide text-ink-900/60 mb-2">Address</div>
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 mt-0.5 text-leaf-600" />
              <p>
                Nasken Health<br />
                867 Boylston Street, 5th Floor<br />
                Boston, MA 02116, USA
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          action="https://formspree.io/f/mayvlxyz"
          method="POST"
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div>
            <label className="block text-sm text-ink-900/70 mb-1">First name *</label>
            <input
              name="first_name"
              required
              className="w-full rounded-lg border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-leaf-400"
              placeholder="First name"
            />
          </div>
          <div>
            <label className="block text-sm text-ink-900/70 mb-1">Last name *</label>
            <input
              name="last_name"
              required
              className="w-full rounded-lg border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-leaf-400"
              placeholder="Last name"
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
            <label className="block text-sm text-ink-900/70 mb-1">Phone number</label>
            <input
              name="phone"
              className="w-full rounded-lg border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-leaf-400"
              placeholder="+1 (555) 000-0000"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm text-ink-900/70 mb-1">Company name</label>
            <input
              name="company"
              className="w-full rounded-lg border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-leaf-400"
              placeholder="Organization"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm text-ink-900/70 mb-1">Message *</label>
            <textarea
              name="message"
              required
              rows={6}
              className="w-full rounded-lg border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-leaf-400"
              placeholder="How can we help?"
            />
          </div>

          <div className="md:col-span-2 text-sm text-ink-900/70 space-y-2">
            <p className="font-medium">We respect your data</p>
            <p>
              We treat your personal details with care and never share them with other companies.
              By submitting this form you agree to our{" "}
              <Link to="/privacy" className="text-leaf-600 hover:text-leaf-700 underline">
                Privacy Policy
              </Link>.
            </p>
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-ink-900 px-5 py-3 text-ink-900 hover:bg-ink-900 hover:text-white transition"
            >
              SUBMIT
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </form>
      </section>

      {/* Shared Footer */}
      <Footer />
    </main>
  );
}
