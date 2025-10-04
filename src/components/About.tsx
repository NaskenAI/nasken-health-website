import { Brain, Heart, Shield } from "lucide-react";
import healthcareTeam from "@/assets/healthcare-team.jpg";

const About = () => {
  return (
    <section id="about" className="healthcare-section bg-muted/30">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold healthcare-heading mb-6">
            About Nasken Health
          </h2>
          <div className="space-y-6">
            <p className="healthcare-body text-lg leading-relaxed">
              Nasken Health is a Boston-based digital health company founded in 2025, 
              specializing in AI-powered solutions for mental health and healthcare engagement. 
              Our mission is to bridge the gap between traditional healthcare delivery and 
              modern digital capabilities.
            </p>
            <p className="healthcare-body text-lg leading-relaxed">
              Current work includes pilots on AI-supported therapy sessions, 
              and remote patient monitoring solutions that enhance patient engagement and 
              clinical outcomes. We focus on applied research that translates directly into 
              measurable improvements in patient care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-4">
              <Brain className="w-8 h-8 text-healthcare-teal mx-auto mb-3" />
              <h3 className="font-semibold healthcare-heading text-sm">AI-Powered</h3>
              <p className="text-xs healthcare-body mt-1">Advanced machine learning for healthcare</p>
            </div>
            <div className="text-center p-4">
              <Heart className="w-8 h-8 text-healthcare-teal mx-auto mb-3" />
              <h3 className="font-semibold healthcare-heading text-sm">Patient-Centered</h3>
              <p className="text-xs healthcare-body mt-1">Focused on improving patient outcomes</p>
            </div>
            <div className="text-center p-4">
              <Shield className="w-8 h-8 text-healthcare-teal mx-auto mb-3" />
              <h3 className="font-semibold healthcare-heading text-sm">Privacy First</h3>
              <p className="text-xs healthcare-body mt-1">HIPAA-compliant and secure by design</p>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <img 
            src={healthcareTeam} 
            alt="Healthcare professionals using AI technology in clinical setting"
            className="rounded-lg shadow-healthcare w-full"
          />
          <div className="absolute inset-0 rounded-lg bg-healthcare-teal/10"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
