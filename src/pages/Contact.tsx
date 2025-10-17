// src/pages/Contact.tsx
import { useSearchParams, Link } from "react-router-dom";
import { Mail, MapPin, CheckCircle2 } from "lucide-react";
import Footer from "@/components/Footer-2";

export default function Contact() {
  const [params] = useSearchParams();
  const sent = params.get("sent") === "1";

  return (
    <main className="bg-white text-ink-900">
      <section className="section py-12">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Contact Us</h1>
        <p className="text-ink-900/70 mt-2">Get in touch with our team.</p>

        {sent && (
          <div
            role="status"
            className="mt-6 flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-800"
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5" />
            <p>Thanks. Your message was sent. We’ll get back to you soon.</p>
          </div>
        )}
      </section>

      <section className="section pb-16 grid md:grid-cols-2 gap-12 items-start">
        {/* Contact info */}
        <div className="space-y-8">
          <div>
            <div className="text-xs uppercase tracking-wide text-ink-900/60 mb-2">Email</div>
            <a
              href="mailto:contact@nasken.ai"
              className="inline-flex items-center gap-2 text-leaf-600 hover:text-leaf-700"
            >
              <Mail className="h-5 w-5" />
              contact@nasken.ai
            </a>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wide text-ink-900/60 mb-2">Address</div>
            <div className="flex items-start gap-2">
              <MapPin className="h-5 w-5 mt-0.5 text-leaf-600" />
              <p>
                Nasken Health
                <br />
                867 Boylston Street, 5th Floor
                <br />
                Boston, MA 02116, USA
              </p>
            </div>
          </div>
        </div>

        {/* Formspree form */}
        <form
          action="https://formspree.io/f/mqaygpaa"
          method="POST"
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Redirect to show success banner */}
          <input type="hidden" name="_redirect" value="https://www.naskenhealth.com/contact?sent=1" />
          {/* Optional subject for Formspree email */}
          <input type="hidden" name="_subject" value="New message from naskenhealth.com" />
          {/* Honeypot */}
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

          <div>
            <label className="block text-sm text-ink-900/70 mb-1" htmlFor="first_name">First name *</label>
            <input
              id="first_name"
              name="first_name"
              required
              autoComplete="given-name"
              className="w-full rounded-lg border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-leaf-400"
              placeholder="First name"
            />
          </div>

          <div>
            <label className="block text-sm text-ink-900/70 mb-1" htmlFor="last_name">Last name *</label>
            <input
              id="last_name"
              name="last_name"
              required
              autoComplete="family-name"
              className="w-full rounded-lg border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-leaf-400"
              placeholder="Last name"
            />
          </div>

          <div>
            <label className="block text-sm text-ink-900/70 mb-1" htmlFor="email">Email *</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              autoComplete="email"
              className="w-full rounded-lg border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-leaf-400"
              placeholder="you@company.com"
            />
          </div>

          <div>
            <label className="block text-sm text-ink-900/70 mb-1" htmlFor="phone">Phone number</label>
            <input
              id="phone"
              name="phone"
              autoComplete="tel"
              className="w-full rounded-lg border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-leaf-400"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm text-ink-900/70 mb-1" htmlFor="company">Company</label>
            <input
              id="company"
              name="company"
              autoComplete="organization"
              className="w-full rounded-lg border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-leaf-400"
              placeholder="Organization"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm text-ink-900/70 mb-1" htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full rounded-lg border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-leaf-400"
              placeholder="How can we help?"
            />
          </div>

          <div className="md:col-span-2 text-sm text-ink-900/70 space-y-2">
            <p className="font-medium">We respect your data.</p>
            <p>
              By submitting this form you agree to our{" "}
              <Link to="/privacy" className="text-leaf-600 hover:text-leaf-700 underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-ink-900 px-5 py-3 text-ink-900 hover:bg-ink-900 hover:text-white transition"
            >
              SUBMIT
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </form>
      </section>

      <Footer />
    </main>
  );
}
