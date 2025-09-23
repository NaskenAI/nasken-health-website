import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Globe, Lock, Zap } from "lucide-react";

const Technology = () => {
  const technologies = [
    {
      icon: <Cpu className="w-8 h-8 text-healthcare-teal" />,
      title: "AI-Assisted Summarization",
      description: "Advanced natural language processing algorithms that analyze patient-generated content to provide clinicians with actionable insights while preserving context and nuance."
    },
    {
      icon: <Globe className="w-8 h-8 text-healthcare-teal" />,
      title: "Multi-Language Accessibility", 
      description: "Real-time translation and culturally-aware content adaptation ensuring equitable access to digital health tools across diverse patient populations."
    },
    {
      icon: <Lock className="w-8 h-8 text-healthcare-teal" />,
      title: "Privacy & Secure Design",
      description: "HIPAA-compliant architecture with end-to-end encryption, federated learning capabilities, and differential privacy techniques to protect sensitive health data."
    },
    {
      icon: <Zap className="w-8 h-8 text-healthcare-teal" />,
      title: "Real-Time Processing",
      description: "Low-latency processing pipelines that enable immediate feedback and intervention opportunities while maintaining clinical workflow integration."
    }
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