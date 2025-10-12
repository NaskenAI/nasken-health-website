import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink } from "lucide-react";

const Media = () => {
  const mediaItems = [
    { headline: "AI Clinical Copilots Gain Traction in Health Systems", date: "September 2025", summary: "Hospitals adopt 'agentic AI' for scheduling, documentation, and decision support, signaling a shift from isolated tools to AI workflows.", link: "https://www.beckershospitalreview.com/healthcare-information-technology/ai/2025-is-becoming-the-year-of-ai-agents-in-healthcare/?utm_source=chatgpt.com" },
    { headline: "FDA to Review Generative AI Mental Health Tools", date: "September 11, 2025", summary: "Digital Health Advisory Committee plans November meeting to address safety and efficacy of generative AI in mental health applications.", link: "https://www.statnews.com/2025/09/11/fda-dhac-digital-health-ai-mental-health/?utm_source=chatgpt.com" },
    { headline: "Doctors Develop AI Stethoscope for Rapid Heart Disease Detection", date: "August 30, 2025", summary: "UK team and Eko Health create stethoscope diagnosing heart failure, valve disease, and arrhythmias within 15 seconds.", link: "https://www.theguardian.com/technology/2025/aug/30/doctors-ai-stethoscope-heart-disease-london?utm_source=chatgpt.com" },
    { headline: "Samsung Galaxy Watches to Detect Heart Failure Risk", date: "August 2025", summary: "Next-generation Galaxy Watches will integrate AI and PPG sensors to flag left ventricular dysfunction.", link: "https://www.androidcentral.com/wearables/samsung-galaxy-watch/samsung-galaxy-watches-will-soon-detect-warning-signs-for-heart-failure?utm_source=chatgpt.com" },
    { headline: "Global South Faces AI Divide in Healthcare", date: "July 2025", summary: "WHO raises concerns that low- and middle-income countries lag in AI health adoption due to infrastructure and regulatory gaps.", link: "https://medicalxpress.com/news/2025-07-ai-hindering-health-global-south.html?utm_source=chatgpt.com" },
    { headline: "Women’s Health Startup Raises $50M for AI-Driven Menopause Care", date: "October 2025", summary: "Midi Health expands AI-powered care for longevity and menopause management with new funding round.", link: "https://www.businessinsider.com/womens-health-startup-midi-health-50-million-longevity-ai-2025-10?utm_source=chatgpt.com" },
  ];

  return (
    <section id="media" className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">Digital Health News</h2>
        <p className="text-sm md:text-base text-slate-600 max-w-3xl mx-auto">
          Latest news and media coverage highlighting research and innovations in digital health.
        </p>
      </div>

      {/* tighter grid */}
      <div className="grid gap-4 md:gap-5 md:grid-cols-2 xl:grid-cols-3">
        {mediaItems.map((item, index) => (
          <Card
            key={index}
            className="border rounded-lg shadow-sm hover:shadow-md transition p-4 md:p-5"
          >
            {/* zero default CardHeader padding */}
            <CardHeader className="p-0 mb-2">
              <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                <Calendar className="w-3.5 h-3.5" />
                <span className="font-medium">{item.date}</span>
              </div>
              <CardTitle className="mt-1 text-base md:text-lg leading-snug">
                {item.headline}
              </CardTitle>
            </CardHeader>

            {/* zero default CardContent padding */}
            <CardContent className="p-0">
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                {item.summary}
              </p>

              <Button
                variant="outline"
                size="sm"
                className="h-8 px-3"
                asChild
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3.5 h-3.5 mr-1" />
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
