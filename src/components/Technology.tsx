import { Cpu, Globe, Lock, Zap } from "lucide-react";

const Technology = () => {
  const technologies = [
    {
      icon: <Cpu className="w-8 h-8 text-leaf-400" />,
      title: "Clinical Language Intelligence",
      description:
        "Domain-adapted language models trained on de-identified medical text to transform unstructured narratives into structured, clinically relevant insights.",
    },
    {
      icon: <Globe className="w-8 h-8 text-leaf-400" />,
      title: "Interoperable Architecture",
      description:
        "FHIR/HL7-based data exchange enabling seamless integration with EHR systems, remote monitoring platforms, and clinical dashboards.",
    },
    {
      icon: <Lock className="w-8 h-8 text-leaf-400" />,
      title: "Privacy-First Infrastructure",
      description:
        "End-to-end encrypted data handling with access control and audit logging ensures HIPAA alignment and patient trust from data ingestion to inference.",
    },
    {
      icon: <Zap className="w-8 h-8 text-leaf-400" />,
      title: "Adaptive Insight Engine",
      description:
        "Continuous learning loops that refine outputs through clinician feedback while maintaining versioned model governance and transparent evaluation.",
    },
  ];

  return (
    <section id="technology" className="py-20 bg-ink-900 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-leaf-400 mb-4">
          Technology Approach
        </h2>
        <p className="text-white/80 text-lg max-w-3xl mx-auto">
          Our technology stack combines AI precision, privacy-preserving design,
          and interoperability — built to serve clinicians and patients alike.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="rounded-xl border border-white/10 p-6 text-center shadow-sm hover:shadow-soft transition"
            style={{ background: "var(--card)" }}
          >
            <div className="flex justify-center mb-4">{tech.icon}</div>
            <h3 className="font-semibold text-lg mb-2 text-white">
              {tech.title}
            </h3>
            <p className="text-sm text-white/70 leading-relaxed">
              {tech.description}
            </p>
          </div>
        ))}
      </div>

      <div
        className="mt-16 rounded-2xl p-10 text-center shadow-inner border border-white/10"
        style={{ background: "linear-gradient(to right, #103b33, #134a3f)" }}
      >
        <h3 className="text-2xl font-semibold text-leaf-400 mb-4">
          Built for Healthcare
        </h3>
        <p className="text-white/80 text-lg max-w-2xl mx-auto">
          Every layer of our technology is designed with clinical precision:
          regulatory compliance, workflow alignment, patient safety, and
          measurable health outcomes.
        </p>
      </div>
    </section>
  );
};

export default Technology;
