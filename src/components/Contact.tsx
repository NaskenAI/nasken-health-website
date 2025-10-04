import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Users, FileText, Phone } from "lucide-react";

const Contact = () => {
  const contactTypes = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Partnerships",
      description: "Clinical collaborations and research partnerships",
      email: "partnerships@nasken.ai"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Research Collaboration",
      description: "Academic partnerships and joint research initiatives", 
      email: "research@nasken.ai"
    }
  ];

  return (
    <section id="contact" className="healthcare-section bg-muted/30">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold healthcare-heading mb-4">
          Contact & Partnerships
        </h2>
        <p className="text-lg healthcare-body max-w-3xl mx-auto mb-8">
          For collaborations, or partnership discussions, 
          we welcome conversations that advance digital health innovation.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {contactTypes.map((contact, index) => (
          <Card key={index} className="healthcare-card text-center hover:border-healthcare-teal/50 transition-colors duration-200">
            <CardContent className="pt-6">
              <div className="flex justify-center text-healthcare-teal mb-4">
                {contact.icon}
              </div>
              <h3 className="font-semibold healthcare-heading text-lg mb-2">
                {contact.title}
              </h3>
              <p className="healthcare-body text-sm mb-4">
                {contact.description}
              </p>
              <Button 
                variant="healthcare-outline"
                className="text-sm"
                onClick={() => window.open(`mailto:${contact.email}`, "_blank")}
              >
                Contact Us
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 max-w-2xl mx-auto">
          <div className="flex justify-center text-healthcare-teal mb-4">
            <Phone className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold healthcare-heading mb-4">
            General Contact
          </h3>
          <p className="healthcare-body mb-6">
            For all other inquiries or to discuss how Nasken Health can support 
            your organization's digital health initiatives.
          </p>
          <Button 
            variant="healthcare"
            size="lg" 
            className="inline-flex items-center gap-2"
            onClick={() => window.open("mailto:contact@nasken.ai", "_blank")}
          >
            <Mail className="w-5 h-5" />
            contact@nasken.ai
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
