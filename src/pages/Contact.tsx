// src/pages/Contact.tsx
import React from "react";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="section py-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink-900 mb-2">
          Contact Us.
        </h1>
        <p className="text-ink-900/70">
          Get in touch with our team today.
        </p>
      </section>

      {/* Info + Form */}
      <section className="section pb-16 grid md:grid-cols-2 gap-12 items-start">
        {/* Left column: email + address */}
        <div className="space-y-8">
          <div>
            <div className="text-sm uppercase tracking-wide text-ink-900/60 mb-2">
              Email
            </div>
            <a
              href="mailto:contact@nasken.ai"
              className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700"
            >
              <Mail className="w-5 h-5" />
              contact@nasken.ai
            </a>
          </div>

          <div>
            <div className="text-sm uppercase tracking-wide text-ink-900/60 mb-2">
              Address
            </div>
            <div className="flex items-start gap-2 text-ink-900">
              <MapPin className="w-5 h-5 mt-0.5 text-brand-600" />
              <p>
                Nasken Health<br />
                867 Boylston Street, 5th Floor<br />
                Boston, MA 02116, USA
              </p>
            </div>
          </div>
        </div>

        {/* Right column: form */}
        <form
          action="https://formspree.io/f/mayvlxyz"
          method="POST"
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="md:col-span-1">
            <label className="block text-sm text-ink-900/70 mb-1">First name *</label>
            <input
              name="first_name"
              required
              className="w-full rounded-lg border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-brand-400"
              placeholder="First name"
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm text-ink-900/70 mb-1">Last name *</label>
            <input
              name="last_name"
              required
              className="w-full rounded-lg border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-brand-400"
              placeholder="Last name"
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm text-ink-900/70 mb-1">Email *</label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-lg border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-brand-400"
              placeholder="you@company.com"
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm text-ink-900/70 mb-1">Phone number</label>
            <input
              name="phone"
              className="w-full rounded-lg border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-brand-400"
              placeholder="+1 (555) 000-0000"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm text-ink-900/70 mb-1">Company name</label>
            <input
              name="company"
              className="w-full rounded-lg border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-brand-400"
              placeholder="Organization"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm text-ink-900/70 mb-1">Message *</label>
            <textarea
              name="message"
              required
              rows={6}
              className="w-full rounded-lg border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-brand-400"
              placeholder="How can we help?"
            />
          </div>

          {/* Data note */}
          <div className="md:col-span-2 text-sm text-ink-900/70 space-y-2">
            <p className="font-medium">We respect your data</p>
            <p>
              We treat your personal details with care and never share them with other companies.
              By submitting this form you agree to our{" "}
              <a href="/privacy" className="text-brand-600 hover:text-brand-700 underline">
                Privacy Policy
              </a>.
            </p>
            <div className="text-ink-900/50">CAPTCHA</div>
          </div>

          {/* Submit */}
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

      {/* Optional dark band like IMU */}
      <section className="bg-ink-900 text-white">
        <div className="section py-14 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="text-2xl font-semibold">Nasken Health</div>
            <p className="mt-2 text-white/80">AI-powered clinical insights</p>
          </div>
          <ul className="text-white/80 space-y-2">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#technology" className="hover:text-white">Technology</a></li>
            <li><a href="#media" className="hover:text-white">News</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
            <li><a href="https://www.linkedin.com/company/nasken-health/" className="hover:text-white">LinkedIn</a></li>
          </ul>
        </div>
        <div className="section pb-10 text-xs text-white/60 space-y-2">
          <p>© {new Date().getFullYear()} Nasken Inc. All rights reserved.</p>
          <p>867 Boylston Street, 5th Floor, Boston, MA 02116, USA</p>
          <p>
            <a href="/privacy" className="hover:text-white">Privacy Policy</a> ·{" "}
            <a href="/terms" className="hover:text-white">Terms of Service</a>
          </p>
        </div>
      </section>
    </main>
  );
}
