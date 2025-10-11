import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink } from "lucide-react";

const Media = () => {
  const mediaItems = [
    {
      headline: "AI Clinical Copilots Gain Traction in Health Systems",
      date: "September 2025",
      summary: "Hospitals adopt 'agentic AI' for scheduling, documentation, and decision support, signaling a shift from isolated tools to AI workflows.",
      link: "https://www.beckershospitalreview.com/healthcare-information-technology/ai/2025-is-becoming-the-year-of-ai-agents-in-healthcare/?utm_source=chatgpt.com"
    },
    {
      headline: "FDA to Review Generative AI Mental Health Tools",
      date: "September 11, 2025",
      summary: "Digital Health Advisory Committee plans November meeting to address safety and efficacy of generative AI in mental health applications.",
      link: "https://www.statnews.com/2025/09/11/fda-dhac-digital-health-ai-mental-health/?utm_source=chatgpt.com"
    },
    {
      headline: "Doctors Develop AI Stethoscope for Rapid Heart Disease Detection",
      date: "August 30, 2025",
      summary: "UK team and Eko Health create stethoscope diagnosing heart failure, valve disease, and arrhythmias within 15 seconds.",
      link: "https://www.theguardian.com/technology/2025/aug/30/doctors-ai-stethoscope-heart-disease-london?utm_source=chatgpt.com"
    },
    {
      headline: "Samsung Galaxy Watches to Detect Heart Failure Risk",
      date: "August 2025",
      summary: "Next-generation Galaxy Watches will integrate AI and PPG sensors to flag left ventricular dysfunction.",
      link: "https://www.androidcentral.com/wearables/samsung-galaxy-watch/samsung-galaxy-watches-will-soon-detect-warning-signs-for-heart-failure?utm_source=chatgpt.com"
    },
    {
      headline: "Global South Faces AI Divide in Healthcare",
      date: "July 2025",
      summary: "WHO raises concerns that low- and middle-income countries lag in AI health adoption due to infrastructure and regulatory gaps.",
      link: "https://medicalxpress.com/news/2025-07-ai-hindering-health-global-south.html?utm_source=chatgpt.com"
    },
    {
      headline: "Women’s Health Startup Raises $50M for AI-Driven Menopause Care",
      date: "October 2025",
      summary: "Midi Health expands AI-powered care for longevity and menopause management with new funding round.",
      link: "https://www.businessinsider.com/womens-health-startup-midi-health-50-million-longevity-ai-2025-10?utm_source=chatgpt.com"
    }
  ];

  return (
    <section id="media" className="healthcare-section bg-muted/30">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold healthcare-heading mb-4">Digital Health Media</h2>
        <p className="text-lg healthcare-body max-w-3xl mx-auto">
          Latest news and media coverage highlighting research and innovations in digital health technology.
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
              <p className="healthcare-body mb-4 leading-relaxed">{item.summary}</p>

              <Button variant="healthcare-outline" asChild>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Read More
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Media;
