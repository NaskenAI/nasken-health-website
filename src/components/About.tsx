import { Brain, Heart, Shield } from "lucide-react";
import healthcareTeam from "@/assets/healthcare-team.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-ink-900 text-white">
      <div className="section grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <h2 className="text-4xl font-semibold text-white mb-4">
            About Nasken Health
          </h2>

          <div className="space-y-6 text-white/80">
            <p>
              Nasken Health is a Boston-based digital health startup developing
              AI-powered tools for remote patient monitoring, therapy data
              summarization, and predictive health analytics. Our platform helps
              clinicians and mental health professionals transform unstructured
              notes and self-reported data into clear, actionable insights.
            </p>
            <p>
              Our mission is to bridge the gap between traditional care delivery
              and intelligent digital systems by securely analyzing patient-generated
              data between visits. We use privacy-preserving machine learning to
              support better engagement, early risk detection, and personalized care.
            </p>
            <p>
              Current pilots include an AI-supported therapy session summarization
              tool that assists clinicians in tracking progress, improving outcomes,
              and enhancing collaboration across care teams.
            </p>
          </div>

          {/* Feature Tiles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              {
                Icon: Brain,
                title: "AI-Powered",
                text: "Machine learning for real-time clinical insights",
              },
              {
                Icon: Heart,
                title: "Patient-Centered",
                text: "Enhancing engagement and therapeutic outcomes",
              },
              {
                Icon: Shield,
                title: "Privacy-First",
                text: "HIPAA-compliant and secure by design",
              },
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
