import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";
import { Link } from "react-router-dom";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-white/90"></div>
      </div>

      {/* Top-right nav */}
      <nav className="absolute top-6 right-6 flex gap-6 z-20">
        <button onClick={() => scrollTo("about")} className="text-gray-700 font-medium hover:text-healthcare-teal">
          About
        </button>
        <button onClick={() => scrollTo("research")} className="text-gray-700 font-medium hover:text-healthcare-teal">
          Research
        </button>
        <button onClick={() => scrollTo("technology")} className="text-gray-700 font-medium hover:text-healthcare-teal">
          Technology
        </button>
        <button onClick={() => scrollTo("contact")} className="text-gray-700 font-medium hover:text-healthcare-teal">
          Contact
        </button>
        <Link to="/fellowships" className="text-gray-700 font-medium hover:text-healthcare-teal">
          Nasken AI Health Fellowships
        </Link>
      </nav>
      {/* Hero content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold healthcare-heading mb-6 animate-fade-in">
          Nasken Health
        </h1>
        <p className="text-xl md:text-2xl healthcare-subheading mb-8 animate-fade-in">
          Advancing digital health through AI.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-healthcare-teal rounded-full flex justify-center">
          <div className="w-1 h-3 bg-healthcare-teal rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
