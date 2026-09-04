import { Calendar, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Media = () => {
  const earlierWorkItems = [
    {
      headline: "How journaling supports mental health",
      date: "University of Rochester Medical Center",
      summary:
        "Overview of evidence and practical ways journaling can reduce stress, clarify thoughts, and support therapy.",
      link: "https://www.urmc.rochester.edu/encyclopedia/content?ContentTypeID=1&ContentID=4552#:~:text=Journaling%20helps%20control%20your%20symptoms,and%20identifying%20negative%20thoughts%20and",
    },
    {
      headline: "What is Patient-Generated Health Data (PGHD)?",
      date: "HealthIT.gov",
      summary:
        "Federal overview of PGHD, its sources, and how it augments clinical decision-making and care coordination.",
      link: "https://www.healthit.gov/topic/scientific-initiatives/pcor/patient-generated-health-data-pghd",
    },
    {
      headline: "Nasken Health joins NVIDIA Inception Program",
      date: "NVIDIA Inception (2025)",
      summary:
        "Nasken Health has been accepted into NVIDIA’s global startup program supporting AI innovators. This collaboration accelerates our mission to build trustworthy, privacy-preserving AI for healthcare.",
      link: "/news/nvidia-inception",
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

  const currentWorkItems = [
    {
      headline: "HL7 FHIR and federal interoperability",
      date: "ASTP/ONC",
      summary:
        "Federal overview of the FHIR standard, its role under the 21st Century Cures Act, and why it underpins health data exchange.",
      link: "https://healthit.gov/interoperability/investments/fhir/",
    },
    {
      headline: "Remote biometric sensing after discharge",
      date: "Journal of Hospital Medicine (2026)",
      summary:
        "Systematic review and meta-analysis of 39 studies examining readmission and mortality outcomes for patients monitored after leaving hospital.",
      link: "https://shmpublications.onlinelibrary.wiley.com/doi/10.1002/jhm.70224",
    },
    {
      headline: "Predicting readmission from post-discharge activity",
      date: "Scientific Reports (2023)",
      summary:
        "Randomised trial testing whether remotely monitored activity patterns improve 30-day readmission prediction over models built from discharge data alone.",
      link: "https://www.nature.com/articles/s41598-023-35201-9",
    },
    {
      headline: "Which RPM components actually work",
      date: "European Journal of Heart Failure (2025)",
      summary:
        "Meta-analysis comparing remote monitoring programme components against hospitalisation and mortality outcomes in heart failure.",
      link: "https://onlinelibrary.wiley.com/doi/full/10.1002/ejhf.3568",
    },
    {
      headline: "Telemonitoring high-risk patients after discharge",
      date: "JMIR (2024)",
      summary:
        "Prospective cohort study of home telemonitoring and follow-up for high-risk patients, measuring readmissions and emergency visits.",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11437225/",
    },
    {
      headline: "Where remote monitoring did not help",
      date: "Randomised trial (2026)",
      summary:
        "Trial across 19 hospitals in which some remote-response strategies produced fewer days at home than usual care for older post-discharge patients.",
      link: "https://pubmed.ncbi.nlm.nih.gov/42275060/",
    },
  ];

  const groups = [
    {
      label: "Current work — post-discharge monitoring and interoperability",
      items: currentWorkItems,
    },
    {
      label: "Earlier work — journaling and patient-generated data",
      items: earlierWorkItems,
    },
  ];

  return (
    <section id="media" className="py-20 bg-ink-900 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-white mb-4">Blogs & News</h2>
        <p className="text-white/80 max-w-3xl mx-auto text-lg">
          Research and federal guidance relevant to our current and earlier work.
        </p>
      </div>

      {/* grid */}
      {groups.map((group) => (
        <div key={group.label} className="section mb-12 last:mb-0">
          <h3 className="text-xs uppercase tracking-widest text-white/60 mb-6">
            {group.label}
          </h3>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {group.items.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/10 p-6 shadow-sm hover:shadow-soft transition"
                style={{ background: "var(--card)" }}
              >
                <div className="flex items-center gap-2 text-white/60 text-sm mb-2">
                  <Calendar className="w-4 h-4 text-leaf-400" />
                  <span>{item.date}</span>
                </div>

                <h4 className="font-semibold text-lg mb-2 text-white">
                  {item.headline}
                </h4>

                <p className="text-sm text-white/70 leading-relaxed mb-4">
                  {item.summary}
                </p>

                {item.link.startsWith("/") ? (
                  <Link
                    to={item.link}
                    className="inline-flex items-center gap-2 rounded-lg px-4 py-2 font-medium text-gray-900 bg-white hover:bg-gray-100 transition shadow-sm text-sm"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-700" />
                    Read More
                  </Link>
                ) : (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg px-4 py-2 font-medium text-gray-900 bg-white hover:bg-gray-100 transition shadow-sm text-sm"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-700" />
                    Read More
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Media;
