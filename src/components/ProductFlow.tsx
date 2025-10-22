import { NotebookPen, Brain, BarChart3 } from "lucide-react";
import productFlow from "@/assets/product-flow.png";

const ProductFlow = () => {
  return (
    <section id="product-flow" className="py-20 bg-ink-900 text-white">
      <div className="section grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="order-2 lg:order-1">
          <img
            src={productFlow}
            alt="Flow: journaling → therapist summary → clinician dashboard"
            className="w-full rounded-2xl ring-1 ring-white/10 shadow-soft"
          />
        </div>

        {/* Right: Text */}
        <div className="order-1 lg:order-2 space-y-8">
          <div>
            <h2 className="text-4xl font-semibold mb-4">How It Works</h2>
            <p className="text-white/80 max-w-xl">
              Nasken Health connects patient journaling, therapist summaries, and clinician dashboards 
              into one continuous, privacy-preserving workflow.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-5">
            {[
              {
                Icon: NotebookPen,
                title: "Journaling Interface",
                text: "Patients record reflections and wellness indicators through a guided interface that captures context between sessions.",
              },
              {
                Icon: Brain,
                title: "Therapist Summary",
                text: "AI models analyze journaling data to extract key emotional and behavioral themes, generating concise summaries for therapists.",
              },
              {
                Icon: BarChart3,
                title: "Clinician Dashboard",
                text: "Clinicians access aggregated insights, mood trends, and early warning signs to deliver proactive, personalized care.",
              },
            ].map(({ Icon, title, text }) => (
              <div key={title} className="flex items-start gap-4">
                <Icon className="w-7 h-7 text-leaf-400 shrink-0" />
                <div>
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Workflow Summary */}
          <div className="pt-4 border-t border-white/10">
            <h3 className="text-xl font-semibold mb-2 text-leaf-400">
              How the Workflow Operates
            </h3>
            <p className="text-white/75 text-sm leading-relaxed max-w-lg">
              The workflow transforms patient-generated journaling into structured, actionable insights 
              across three stages: capture, summarize, and visualize. Data flows securely from the patient 
              to the therapist and clinician dashboards—fully encrypted and HIPAA-aligned. Every stage 
              enhances engagement, risk detection, and care personalization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFlow;
