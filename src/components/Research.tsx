import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink } from "lucide-react";

const Research = () => {
  const publications = [
    // {
    //   title: "AI-Supported Journaling in Outpatient Therapy",
    //   subtitle: "Pilot Summary (2025)",
    //   description: "Comprehensive analysis of AI-assisted therapeutic journaling implementation in outpatient settings, showing 34% improvement in session engagement and 28% better treatment adherence.",
    //   type: "Pilot Study",
    //   link: "#"
    // },
    // {
    //   title: "Remote Patient Monitoring and Patient Engagement", 
    //   subtitle: "White Paper (2025)",
    //   description: "Evidence-based framework for implementing remote monitoring solutions that enhance patient engagement while maintaining clinical efficacy and regulatory compliance.",
    //   type: "White Paper", 
    //   link: "#"
    // },
    // {
    //   title: "Multi-Language Accessibility in Digital Health",
    //   subtitle: "Research Brief (2025)",
    //   description: "Systematic review of language barriers in digital health platforms and proposed AI-powered solutions for improving healthcare accessibility across diverse populations.",
    //   type: "Research Brief",
    //   link: "#"
    // },
    // {
    //   title: "Privacy-Preserving AI in Mental Health Applications",
    //   subtitle: "Technical Report (2025)", 
    //   description: "Analysis of federated learning approaches and differential privacy techniques for maintaining patient confidentiality in AI-powered mental health interventions.",
    //   type: "Technical Report",
    //   link: "#"
    // }
  ];

  return (
    <section id="research" className="healthcare-section">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold healthcare-heading mb-4">
          Research & Publications
        </h2>
        <p className="text-lg healthcare-body max-w-3xl mx-auto">
          Our research focuses on evidence-based approaches to digital health innovation, 
          with particular emphasis on AI applications in mental health and patient engagement.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {publications.map((pub, index) => (
          <Card key={index} className="healthcare-card hover:border-healthcare-teal/50 transition-colors duration-200">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <div className="bg-healthcare-light-teal text-healthcare-teal px-3 py-1 rounded-full text-sm font-medium">
                  {pub.type}
                </div>
                <FileText className="w-5 h-5 text-healthcare-gray" />
              </div>
              <CardTitle className="healthcare-heading text-xl leading-tight">
                {pub.title}
              </CardTitle>
              <CardDescription className="healthcare-subheading font-medium">
                {pub.subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="healthcare-body mb-4 leading-relaxed">
                {pub.description}
              </p>
              <Button 
                variant="healthcare-outline"
                className="w-full"
                onClick={() => window.open("mailto:contact@nasken.ai?subject=Publication Request", "_blank")}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Access Publication
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Research;
