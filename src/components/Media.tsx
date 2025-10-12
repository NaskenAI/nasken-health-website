import { Calendar, ExternalLink } from "lucide-react";

const Media = () => {
  const mediaItems = [
    {
      headline: "AI Clinical Copilots Gain Traction in Health Systems",
      date: "September 2025",
      summary:
        "Hospitals adopt 'agentic AI' for scheduling, documentation, and decision support, signaling a shift from isolated tools to AI workflows.",
      link: "https://www.beckershospitalreview.com/healthcare-information-technology/ai/2025-is-becoming-the-year-of-ai-agents-in-healthcare/?utm_source=chatgpt.com",
    },
    {
      headline: "FDA to Review Generative AI Mental Health Tools",
      date: "September 11, 2025",
      summary:
        "Digital Health Advisory Committee plans November meeting to address safety and efficacy of generative AI in mental health applications.",
      link: "https://www.statnews.com/2025/09/11/fda-dhac-digital-health-ai-mental-health/?utm_source=chatgpt.com",
    },
    {
      headline: "Doctors Develop AI Stethoscope for Rapid Heart Disease Detection",
      date: "August 30, 2025",
      summary:
        "UK team and Eko Health create stethoscope diagnosing heart failure, valve disease, and arrhythmias within 15 seconds.",
      link: "https://www.theguardian.com/technology/2025/aug/30/doctors-ai-stethoscope-heart-disease-london?utm_source=chatgpt.com",
    },
    {
      headline: "Samsung Galaxy Watches to Detect Heart Failure Risk",
      date: "August 2025",
      summary:
        "Next-generation Galaxy Watches will integrate AI and PPG sensors to flag left ventricular dysfunction.",
      link: "https://www.androidcentral.com/wearables/samsung-galaxy-watch/samsung-galaxy-watches-will-soon-detect-warning-signs-for-heart-failure?utm_source=chatgpt.com",
    },
    {
      headline: "Global South Faces AI Divide in Healthcare",
      date: "July 2025",
      summary:
        "WHO raises concerns that low- and middle-income countries lag in AI health adoption due to infrastructure and regulatory gaps.",
      link: "https://medicalxpress.com/news/2025-07-ai-hindering-health-global-south.html?utm_source=chatgpt.com",
    },
    {
      headline: "Women’s Health Startup Raises $50M for AI-Driven Menopause Care",
      date: "October 2025",
      summary:
        "Midi Health expands AI-powered care for longevity and menopause management with new funding round.",
      link: "https://www.businessinsider.com/womens-health-startup-midi-health-50-million-longevity-ai-2025-10?utm_source=chatgpt.com",
    },
  ];

  return (
    <section id="media" className="py-20 bg-ink-900 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold mb-2 text-green-200">
          Blogs & News
        </h2>
        <p className="text-white/80 max-w-3xl mx-auto text-lg">
          Latest news highlighting research and innovations in digital health.
        </p>
      </div>

      {/* grid */}
      <div className="section grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border border-white/10 p-6 shadow-sm hover:shadow-soft transition"
            style={{ background: "var(--card)" }}
          >
            {/* header */}
            <div className="flex items-center gap-2 text-white/60 text-sm mb-2">
              <Calendar className="w-4 h-4 text-leaf-400" />
              <span>{item.date}</span>
            </div>

            {/* title */}
            <h3 className="font-semibold text-lg mb-2 text-white">
              {item.headline}
            </h3>

            {/* summary */}
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              {item.summary}
            </p>

            {/* button */}
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-4 py-2 font-medium text-white shadow-soft text-sm"
              style={{ background: "var(--btn)" }}
            >
              <ExternalLink className="w-4 h-4" />
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Media;
