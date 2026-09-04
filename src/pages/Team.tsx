import { LinkedinIcon, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

function InitialsAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className="w-32 h-32 mx-auto rounded-full mb-5 bg-slate-100 flex items-center justify-center"
      role="img"
      aria-label={name}
    >
      <span className="text-2xl font-semibold text-ink-900/60">{initials}</span>
    </div>
  );
}

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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
          {/* Founder */}
          <div className="text-center border border-slate-200 rounded-2xl p-8 hover:shadow-soft transition w-full max-w-sm">
            <InitialsAvatar name="Sandesh GV" />
            <h3 className="text-xl font-semibold">Sandesh GV</h3>
            <p className="text-leaf-600 font-medium mb-3">Founder &amp; CEO</p>
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

          {/* Head of Engineering */}
          <div className="text-center border border-slate-200 rounded-2xl p-8 hover:shadow-soft transition w-full max-w-sm">
            <InitialsAvatar name="Uriah Thornes" />
            <h3 className="text-xl font-semibold">Uriah Thornes</h3>
            <p className="text-leaf-600 font-medium mb-3">Engineering</p>
            <p className="text-sm text-ink-900/70 leading-relaxed">
              Leads Nasken’s AI and software engineering teams across journaling
              summarization, clinical NLP, and multimodal health data pipelines.
              Focused on building scalable, responsible AI frameworks in healthcare.
            </p>

            <div className="flex items-center justify-center gap-4 mt-4">
              <a
                href="mailto:uriah@nasken.ai"
                className="text-ink-900 hover:text-leaf-600"
                aria-label="Email Uriah"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>


          <div className="text-center border border-slate-200 rounded-2xl p-8 hover:shadow-soft transition w-full max-w-sm">
            <InitialsAvatar name="Yijia Xu" />
            <h3 className="text-xl font-semibold">Yijia Xu</h3>
            <p className="text-leaf-600 font-medium mb-3">Advisor — Research & Data</p>
            <p className="text-sm text-ink-900/70 leading-relaxed">
              Policy & data analyst specializing in quantitative research,
              regression models, panel data methods, and large-scale dataset
              analytics. Supports Nasken Health’s research design, statistical
              validation, and academic collaborations.
            </p>

            <div className="flex items-center justify-center gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/yijia-xu-georgina"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-900 hover:text-leaf-600"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
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
              No current openings — you can still{" "}
              <span className="text-leaf-600 underline hover:text-leaf-700">
                share your LinkedIn profile
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
