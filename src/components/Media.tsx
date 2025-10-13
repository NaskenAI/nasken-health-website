import { Calendar, ExternalLink } from "lucide-react";

const Media = () => {
  const mediaItems = [
    {
      headline: "How journaling supports mental health",
      date: "Harvard Health Publishing",
      summary:
        "Overview of evidence and practical ways journaling can reduce stress, clarify thoughts, and support therapy.",
      link: "https://www.health.harvard.edu/healthbeat/how-journaling-can-help-you-in-hard-times",
    },
    {
      headline: "What is Patient-Generated Health Data (PGHD)?",
      date: "HealthIT.gov",
      summary:
        "Federal overview of PGHD, its sources, and how it augments clinical decision-making and care coordination.",
      link: "https://www.healthit.gov/topic/scientific-initiatives/pcor/patient-generated-health-data-pghd",
    },
    {
      headline: "Technology and the future of mental health treatment",
      date: "NIMH",
      summary:
        "NIMH guidance on mobile apps, telehealth, sensors, and the promise and limits of digital mental health.",
      link: "https://www.nimh.nih.gov/health/topics/technology-and-the-future-of-mental-health-treatment",
    },
    {
      headline: "Conversational agents for mental health: scoping review",
      date: "npj Digital Medicine (2024)",
      summary:
        "Systematic synthesis of mental-health chatbots, use cases, outcomes, and safety considerations.",
      link: "https://www.nature.com/articles/s41746-024-01261-2",
    },
    {
      headline: "Patient-generated data improves patient-provider communication",
      date: "JMIR Medical Informatics (2024)",
      summary:
        "Study showing how introducing PGHD changes communication behaviors and care interactions.",
      link: "https://medinform.jmir.org/2024/1/e57406",
    },
    {
      headline: "App-based interventions for depression: clinical evidence",
      date: "JAMA Network Open (2023)",
      summary:
        "Randomized-trial evidence on smartphone-based interventions as part of depression care.",
      link: "https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2812076",
    },
  ];

  return (
    <section id="media" className="py-20 bg-ink-900 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-white mb-4">
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
              className="inline-flex items-center gap-2 rounded-lg px-4 py-2 font-medium text-gray-900 bg-white hover:bg-gray-100 transition shadow-sm text-sm"
            >
              <ExternalLink className="w-4 h-4 text-gray-700" />
              Read More
            </a>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Media;
