import { Helmet } from "react-helmet-async";
import { LinkedinIcon, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer-2";

export default function Team() {
  return (
    <main className="bg-white text-ink-900">
      <Helmet>
        <title>Our Team — Nasken Health</title>
        <meta
          name="description"
          content="Meet the Nasken Health leadership team advancing trustworthy, privacy-preserving AI in healthcare, including founder Sandesh GV and incoming engineers."
        />
        <link rel="canonical" href="https://www.naskenhealth.com/team" />
      </Helmet>

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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
          {/* Founder */}
          <div className="text-center border border-slate-200 rounded-2xl p-8 hover:shadow-soft transition w-full max-w-sm">
            <img
              src="https://avatars.githubusercontent.com/u/00000000?v=4"
              alt="Sandesh GV"
              className="w-32 h-32 mx-auto rounded-full mb-5 object-cover"
            />
            <h3 className="text-xl font-semibold">Sandesh GV</h3>
            <p className="text-leaf-600 font-medium mb-3">Founder & CEO</p>
            <p className="text-sm text-ink-900/70 leading-relaxed">
              Engineering leader with 12+ years of experience in AI and software systems.
              Formerly at Meta and Oracle, building privacy-preserving clinical AI
              and digital health platforms integrating patient-generated data and
              predictive analytics.
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

          {/* Incoming Principal Engineer */}
          <div className="text-center border border-slate-200 rounded-2xl p-8 hover:shadow-soft transition w-full max-w-sm">
            <div className="w-32 h-32 mx-auto mb-5 rounded-full bg-slate-100 flex items-center justify-center text-ink-900/40 text-xl font-semibold">
              Incoming
            </div>
            <h3 className="text-xl font-semibold">Uriah Thornes</h3>
            <p className="text-leaf-600 font-medium mb-3">Principal Software Engineer — AI/ML</p>
            <p className="text-sm text-ink-900/70 leading-relaxed">
              Will lead core AI architecture and model development across
              journaling summarization, clinical NLP, and multimodal health data
              pipelines. Focus on scaling responsible AI frameworks in healthcare.
            </p>
          </div>

          {/* Incoming Software Engineering Intern */}
          <div className="text-center border border-slate-200 rounded-2xl p-8 hover:shadow-soft transition w-full max-w-sm">
            <div className="w-32 h-32 mx-auto mb-5 rounded-full bg-slate-100 flex items-center justify-center text-ink-900/40 text-xl font-semibold">
              Incoming
            </div>
            <h3 className="text-xl font-semibold">Alex Audi</h3>
            <p className="text-leaf-600 font-medium mb-3">Software Engineering Intern</p>
            <p className="text-sm text-ink-900/70 leading-relaxed">
              Joining the engineering team to contribute to front-end and data
              integration pipelines for Nasken Health’s AI-powered journaling and
              remote patient monitoring platform.
            </p>
          </div>

          {/* Careers invitation */}
          <Link
            to="/careers"
            className="text-center border border-dashed border-slate-300 rounded-2xl p-8 hover:shadow-soft transition w-full max-w-sm flex flex-col items-center justify-center text-ink-900/70 hover:text-ink-900"
          >
            <div className="w-32 h-32 mb-5 rounded-full bg-slate-50 flex items-center justify-center">
              <span className="text-ink-900/40 font-semibold text-lg">Join Us</span>
            </div>
            <h3 className="text-lg font-medium mb-2">Interested in joining our mission?</h3>
            <p className="text-sm">
              Explore opportunities at{" "}
              <span className="text-leaf-600 underline hover:text-leaf-700">
                Nasken Health Careers
              </span>
              .
            </p>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
