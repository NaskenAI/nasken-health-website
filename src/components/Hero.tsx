// src/components/Hero.tsx
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink-900 text-white">
      {/* Background image with green-tinted overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 500px at 15% 10%, rgba(16,185,129,.18), transparent 60%), radial-gradient(700px 420px at 85% 15%, rgba(5,150,105,.16), transparent 60%)",
        }}
      />

      {/* Top-right nav */}
      <nav className="absolute top-6 right-6 z-20 flex flex-wrap items-center gap-6 text-sm">
        <button onClick={() => scrollTo("about")} className="text-white/80 hover:text-leaf-400">
          About
        </button>
        <Link to="/team" className="text-white/80 hover:text-leaf-400">
          Team
        </Link>
        <Link to="/careers" className="text-white/80 hover:text-leaf-400">
          Careers
        </Link>
        <button onClick={() => scrollTo("technology")} className="text-white/80 hover:text-leaf-400">
          Technology
        </button>
        <Link to="/contact" className="text-white/80 hover:text-leaf-400">
          Contact
        </Link>
        <Link to="/fellowships" className="text-white/80 hover:text-leaf-400">
          Nasken AI Health Fellowships
        </Link>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Nasken Health</h1>
        <p className="text-xl md:text-2xl text-white/85 mb-8">
          Advancing digital health with privacy-first clinical AI.
        </p>

        <div className="flex items-center justify-center gap-3">
          <Link
            to="/contact"
            className="rounded-lg px-5 py-3 font-medium text-white shadow-soft"
            style={{ background: "var(--btn)" }}
          >
            Get early access
          </Link>

          <a
            href="#technology"
            className="rounded-lg px-5 py-3 font-medium border border-white/30 text-white hover:bg-white/10"
          >
            Request Demo
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-leaf-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-leaf-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
