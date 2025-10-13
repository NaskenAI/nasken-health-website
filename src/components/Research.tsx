// src/components/Research.tsx
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Stat = {
  value: string;
  label: string;
  cite: { short: string; note: string; url: string };
};

const Research = () => {
  const stats: Stat[] = [
    {
      value: "1 in 5",
      label:
        "Adults experience a mental health condition each year (U.S.).",
      cite: {
        short: "APA, 2024",
        note:
          "American Psychiatric Association fact sheet reporting ~20% of adults experience mental illness annually.",
        url: "https://www.psychiatry.org/news-room/facts-statistics/mental-illness",
      },
    },
    {
      value: "~5%",
      label:
        "Added symptom reduction with expressive or reflective journaling vs. control interventions.",
      cite: {
        short: "Journaling Meta-analysis, 2022",
        note:
          "Systematic review and meta-analysis showing small but significant mental health benefits of journaling interventions.",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8935176/",
      },
    },
    {
      value: "12 weeks",
      label:
        "Web-based positive-affect journaling reduced distress and improved well-being.",
      cite: {
        short: "Smyth et al., 2018",
        note:
          "Randomized controlled trial published in JMIR Mental Health examining effects of online journaling for 12 weeks.",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6305886/",
      },
    },
    {
      value: "PGHD",
      label:
        "Patient-generated health data (PGHD) supports self-management and shared decision-making.",
      cite: {
        short: "PGHD Review, 2020",
        note:
          "ResearchGate review summarizing how patient-generated health data improves engagement and clinical collaboration.",
        url: "https://www.researchgate.net/publication/340853530_Patient-Generated_Health_Data_Dimensions_Challenges_and_Open_Questions",
      },
    },
    {
      value: "Clinician use",
      label:
        "Structured between-session data helps personalize care and track outcomes.",
      cite: {
        short: "MDPI, 2023",
        note:
          "MDPI Social Sciences qualitative study exploring clinician feedback on patient data in care planning.",
        url: "https://www.mdpi.com/2076-0760/12/12/648",
      },
    },
    {
      value: "Engagement",
      label:
        "Guided journaling builds emotional awareness between sessions.",
      cite: {
        short: "APA, 2024",
        note:
          "APA mental health tools note journaling as a way to increase emotional regulation and therapeutic reflection.",
        url: "https://www.psychiatry.org/news-room/facts-statistics/mental-illness",
      },
    },
  ];

  return (
    <section id="research" className="py-20 bg-ink-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold mb-4">
          Why Journaling & Patient Data Matter
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-12 text-lg">
          Structured journaling and patient-generated data improve self-awareness,
          support emotion regulation, and give clinicians richer context between sessions.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((s, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 p-6 shadow-sm hover:shadow-soft transition"
              style={{ background: "var(--card)" }}
            >
              <div className="text-2xl md:text-3xl font-semibold mb-3">
                {s.value}
              </div>
              <div className="text-sm md:text-base text-white/70 leading-snug mb-3">
                {s.label}
              </div>

              {/* Citation tooltip with external link */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={s.cite.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs underline underline-offset-4 hover:text-white/80"
                  >
                    {s.cite.short}
                  </a>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs text-sm">
                  {s.cite.note}
                </TooltipContent>
              </Tooltip>
            </div>
          ))}
        </div>

        <p className="mt-10 text-xs text-white/50 max-w-3xl mx-auto">
          Sources: American Psychiatric Association (2024); JAMA Network Open (2022);
          Smyth et al., JMIR Mental Health (2018); ResearchGate PGHD Review (2020);
          MDPI Social Sciences (2023).
        </p>
      </div>
    </section>
  );
};

export default Research;
