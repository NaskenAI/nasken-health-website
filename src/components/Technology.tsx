import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Globe, Lock, Zap } from "lucide-react";

const Technology = () => {
  const technologies = [
    {
      icon: <Cpu className="w-8 h-8 text-sky-600" />,
      title: "Clinical Language Intelligence",
      description:
        "Domain-adapted language models trained on de-identified medical text to transform unstructured narratives into structured, clinically relevant insights.",
    },
    {
      icon: <Globe className="w-8 h-8 text-sky-600" />,
      title: "Interoperable Architecture",
      description:
        "FHIR/HL7-based data exchange enabling seamless integration with electronic health record systems, remote monitoring platforms, and provider dashboards.",
    },
    {
      icon: <Lock className="w-8 h-8 text-sky-600" />,
      title: "Privacy-First Infrastructure",
      description:
        "Encrypted data handling, role-based access control, and audit trails ensure HIPAA alignment and patient trust from data ingestion to inference.",
    },
    {
      icon: <Zap className="w-8 h-8 text-sky-600" />,
      title: "Adaptive Insight Engine",
      description:
        "Continuous learning loops that refine outputs through clinician feedback while maintaining versioned model governance and transparent evaluation.",
    },
  ];

  return (
    <section id="technology" className="healthcare-section">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold healthcare-heading mb-4">
          Technology Approach
        </h2>
        <p className="text-lg healthcare-body max-w-3xl mx-auto">
          Our technology stack is built on proven AI methodologies, prioritizing 
          patient privacy, clinical efficacy, and seamless healthcare integration.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {technologies.map((tech, index) => (
          <Card key={index} className="healthcare-card text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                {tech.icon}
              </div>
              <CardTitle className="healthcare-heading text-lg">
                {tech.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="healthcare-body text-sm leading-relaxed">
                {tech.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 bg-healthcare-light-teal/50 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold healthcare-heading mb-4">
          Built for Healthcare
        </h3>
        <p className="healthcare-body text-lg max-w-2xl mx-auto">
          Every component of our technology stack is designed with healthcare-specific 
          requirements in mind: regulatory compliance, clinical workflows, patient safety, 
          and evidence-based outcomes.
        </p>
      </div>
    </section>
  );
};

export default Technology;
