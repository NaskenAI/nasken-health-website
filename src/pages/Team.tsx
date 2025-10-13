
// src/pages/Team.tsx
import { LinkedinIcon, Mail } from "lucide-react";
import Footer from "@/components/Footer";

export default function Team() {
  return (
    <main className="bg-white text-ink-900">
      {/* Header */}
      <section className="section py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-3">
          Our Team
        </h1>
        <p className="text-ink-900/70 max-w-2xl mx-auto">
          Nasken Health is led by engineers and researchers advancing
          trustworthy, privacy-preserving AI in healthcare.
        </p>
      </section>

      {/* Team section */}
      <section className="section pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {/* Founder card */}
          <div className="text-center border border-slate-200 rounded-2xl p-8 hover:shadow-soft transition w-full max-w-sm">
            <img
              src="https://avatars.githubusercontent.com/u/00000000?v=4" // replace with your real photo
              alt="Sandesh Gubbi Virupaksha"
              className="w-32 h-32 mx-auto rounded-full mb-5 object-cover"
            />
            <h3 className="text-xl font-semibold">Sandesh Gubbi Virupaksha</h3>
            <p className="text-leaf-600 font-medium mb-3">Founder & CEO</p>
            <p className="text-sm text-ink-900/70 leading-relaxed">
              Engineering leader with 12+ years of experience in AI and software systems.
              Formerly at Meta and Oracle, focused on building privacy-preserving
              clinical AI and digital health platforms.
            </p>

            <div className="flex items-center justify-center gap-4 mt-4">
              <a
                href="mailto:sandeshgv@naskenhealth.com"
                className="text-ink-900 hover:text-leaf-600"
                aria-label="Email Sandesh"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sandeshgv/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-900 hover:text-leaf-600"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Placeholder */}
          <div className="text-center border border-dashed border-slate-300 rounded-2xl p-8 text-ink-900/60 max-w-sm">
            <p className="text-lg font-medium mb-1">We’re growing</p>
            <p className="text-sm">
              Interested in joining our mission?{" "}
              <a
                href="mailto:contact@nasken.ai"
                className="text-leaf-600 hover:text-leaf-700 underline"
              >
                Reach out
              </a>{" "}
              to collaborate.
            </p>
          </div>
        </div>
      </section>

      {/* Shared footer */}
      <Footer />
    </main>
  );
}
