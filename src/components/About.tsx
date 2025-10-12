import { Brain, Heart, Shield } from "lucide-react";
import healthcareTeam from "@/assets/healthcare-team.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-ink-900 text-white">
      <div className="section grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-emerald-400">
          About Nasken Health
          </h2>

          <div className="space-y-6 text-white/80">
            <p>
              Nasken Health is a Boston-based digital health company founded in 2025,
              developing AI-powered solutions for mental health and patient engagement.
              Our mission is to bridge the gap between traditional healthcare delivery
              and modern digital intelligence.
            </p>
            <p>
              Current work includes pilots on AI-supported therapy sessions and remote
              patient monitoring that enhances engagement and clinical outcomes. Our
              applied research directly translates into measurable improvements in care.
            </p>
          </div>

          {/* Feature Tiles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              { Icon: Brain, title: "AI-Powered", text: "Machine learning for personalized care" },
              { Icon: Heart, title: "Patient-Centered", text: "Improving outcomes through engagement" },
              { Icon: Shield, title: "Privacy-First", text: "HIPAA-compliant and secure by design" },
            ].map(({ Icon, title, text }) => (
              <div
                key={title}
                className="rounded-xl border border-white/10 p-5 text-center text-white shadow-soft"
                style={{ background: "var(--card)" }}
              >
                <Icon className="w-8 h-8 text-leaf-400 mx-auto mb-3" />
                <h3 className="font-semibold text-sm text-white">{title}</h3>
                <p className="text-xs text-white/70 mt-1">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <img
            src={healthcareTeam}
            alt="Healthcare professionals using AI technology"
            className="rounded-xl w-full border border-white/10 shadow-soft"
          />
          <div className="absolute inset-0 rounded-xl bg-leaf-500/10"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
