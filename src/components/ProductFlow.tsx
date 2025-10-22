import { NotebookPen, Brain, BarChart3 } from "lucide-react";
import productFlow from "@/assets/product-flow.png";

const ProductFlow = () => {
  return (
    <section id="product-flow" className="py-20 bg-ink-950 text-white">
      <div className="section grid lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative order-2 lg:order-1">
          <img
            src={productFlow}
            alt="Journaling to therapist summary to clinician dashboard flow"
            className="rounded-xl w-full border border-white/10 shadow-soft"
          />
          <div className="absolute inset-0 rounded-xl bg-leaf-500/10"></div>
        </div>

        {/* Text */}
        <div className="order-1 lg:order-2">
          <h2 className="text-4xl font-semibold mb-4">How It Works</h2>
          <p className="text-white/80 mb-8">
            Nasken Health links journaling, therapist summaries, and clinician dashboards into a unified,
            privacy-preserving workflow that makes care continuous and data-informed.
          </p>

          <div className="space-y-6">
            {[
              {
                Icon: NotebookPen,
                title: "Journaling Interface",
                text: "Patients record reflections and wellness indicators in a guided interface.",
              },
              {
                Icon: Brain,
                title: "Therapist Summary",
                text: "AI models convert journaling data into concise therapist-ready insights.",
              },
              {
                Icon: BarChart3,
                title: "Clinician Dashboard",
                text: "Clinicians view trends, emotional patterns, and engagement metrics.",
              },
            ].map(({ Icon, title, text }) => (
              <div key={title} className="flex items-start gap-4">
                <Icon className="w-7 h-7 text-leaf-400 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-white mb-1">{title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFlow;
