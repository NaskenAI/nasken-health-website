import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";

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
        <a href="#about" className="text-healthcare-teal font-medium hover:underline">About</a>
        <a href="#research" className="text-healthcare-teal font-medium hover:underline">Research</a>
        <a href="#technology" className="text-healthcare-teal font-medium hover:underline">Technology</a>
        <a href="#contact" className="text-healthcare-teal font-medium hover:underline">Contact</a>
        <Link to="/fellowships" className="text-healthcare-teal font-medium hover:underline"> Nasken AI Health Fellowships </Link>
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
