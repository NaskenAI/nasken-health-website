import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink } from "lucide-react";

const Media = () => {
  const mediaItems = [
    {
      headline: "Nasken Health launches digital health pilot with graduate psychology programs",
      date: "January 15, 2025",
      summary: "Partnership with leading psychology graduate programs to pilot AI-supported therapeutic journaling tools, aiming to enhance clinical training and patient outcomes.",
      link: "#"
    },
    {
      headline: "AI-Powered Patient Monitoring Shows Promise in Early Clinical Trials",
      date: "December 8, 2024", 
      summary: "Preliminary results from remote monitoring pilots demonstrate significant improvements in patient engagement and clinical decision-making efficiency.",
      link: "#"
    },
    {
      headline: "Nasken Health Receives Recognition for Digital Health Innovation",
      date: "November 22, 2024",
      summary: "Company selected for healthcare technology accelerator program focusing on AI applications in mental health and chronic disease management.",
      link: "#"
    },
    {
      headline: "Privacy-First Approach to Healthcare AI Gains Industry Attention",
      date: "October 30, 2024",
      summary: "Nasken's federated learning framework for healthcare AI highlighted in digital health privacy summit as model for industry best practices.",
      link: "#"
    }
  ];

  return (
    <section id="media" className="healthcare-section bg-muted/30">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold healthcare-heading mb-4">
          Media & Press
        </h2>
        <p className="text-lg healthcare-body max-w-3xl mx-auto">
          Latest news, press releases, and media coverage highlighting our research 
          and innovations in digital health technology.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {mediaItems.map((item, index) => (
          <Card key={index} className="healthcare-card hover:border-healthcare-teal/50 transition-colors duration-200">
            <CardHeader>
              <div className="flex items-center gap-2 text-healthcare-gray mb-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-medium">{item.date}</span>
              </div>
              <CardTitle className="healthcare-heading text-xl leading-tight">
                {item.headline}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="healthcare-body mb-4 leading-relaxed">
                {item.summary}
              </p>
              <Button 
                variant="healthcare-outline"
                onClick={() => window.open("mailto:contact@nasken.ai?subject=Press Inquiry", "_blank")}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Read More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Media;