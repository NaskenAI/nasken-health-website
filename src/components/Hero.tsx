import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-white/90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold healthcare-heading mb-6 animate-fade-in">
          Nasken Health
        </h1>
        <p className="text-xl md:text-2xl healthcare-subheading mb-8 animate-fade-in">
          Advancing digital health through AI.
        </p>
        <Button 
          variant="healthcare"
          size="lg"
          className="inline-flex items-center gap-2 text-lg px-8 py-4 animate-scale-in"
          onClick={() => window.open("mailto:contact@nasken.ai?subject=White Paper Request", "_blank")}
        >
          <FileText className="w-5 h-5" />
          Read Latest White Paper
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-healthcare-teal rounded-full flex justify-center">
          <div className="w-1 h-3 bg-healthcare-teal rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;