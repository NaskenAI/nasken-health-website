// src/components/PostDischargeEvidence.tsx
// Mirrors Research.tsx exactly: same Stat shape, same grid, same card markup,
// same citation tooltip. Every figure here is from third-party literature and
// is not a Nasken finding.
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

type Stat = {
  value: string;
  label: string;
  cite: { short: string; note: string; url?: string };
};

const PostDischargeEvidence = () => {
  const stats: Stat[] = [
    {
      value: "14.6%",
      label: "National all-cause 30-day readmission rate for Medicare patients.",
      cite: {
        short: "CMS, 2023",
        note: "Centers for Medicare & Medicaid Services, 2023.",
      },
    },
    {
      value: "$41.5B",
      label: "Annual US cost of hospital readmissions.",
      cite: {
        short: "J Hosp Med, 2026",
        note: "Farahani et al., Journal of Hospital Medicine (2026).",
        url: "https://shmpublications.onlinelibrary.wiley.com/doi/10.1002/jhm.70224",
      },
    },
    {
      value: "25%",
      label:
        "Lower all-cause readmission risk with remote biometric sensing, across 39 studies.",
      cite: {
        short: "J Hosp Med, 2026",
        note: "Farahani et al., Journal of Hospital Medicine (2026).",
        url: "https://shmpublications.onlinelibrary.wiley.com/doi/10.1002/jhm.70224",
      },
    },
    {
      value: "22%",
      label: "Heart failure patients readmitted within 30 days of discharge.",
      cite: {
        short: "Eur J Heart Fail, 2025",
        note: "De Lathauwer et al., European Journal of Heart Failure (2025).",
        url: "https://onlinelibrary.wiley.com/doi/full/10.1002/ejhf.3568",
      },
    },
    {
      value: "Prediction",
      label:
        "Adding remotely monitored post-discharge activity data improved 30-day readmission prediction over discharge-data-only models.",
      cite: {
        short: "Sci Rep, 2023",
        note: "Scientific Reports (2023).",
        url: "https://www.nature.com/articles/s41598-023-35201-9",
      },
    },
    {
      value: "Mortality",
      label:
        "No significant mortality difference between remote-monitoring and comparison groups in 24 of 39 studies.",
      cite: {
        short: "J Hosp Med, 2026",
        note: "Farahani et al., Journal of Hospital Medicine (2026).",
        url: "https://shmpublications.onlinelibrary.wiley.com/doi/10.1002/jhm.70224",
      },
    },
  ];

  return (
    <section id="post-discharge-evidence" className="py-20 bg-ink-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold mb-4">
          Why Post-Discharge Monitoring Matters
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-12 text-lg">
          The weeks after discharge are where recovery is decided and where clinical
          visibility is thinnest. This is the research base for our current work.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((s, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 p-6 shadow-sm hover:shadow-soft transition"
              style={{ background: "var(--card)" }}
            >
              <div className="text-2xl md:text-3xl font-semibold mb-3">{s.value}</div>
              <div className="text-sm md:text-base text-white/70 leading-snug mb-3">
                {s.label}
              </div>

              {/* Citation tooltip with external link */}
              <Tooltip>
                <TooltipTrigger asChild>
                  {s.cite.url ? (
                    <a
                      href={s.cite.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs underline underline-offset-4 hover:text-white/80"
                    >
                      {s.cite.short}
                    </a>
                  ) : (
                    <span className="text-xs underline underline-offset-4">
                      {s.cite.short}
                    </span>
                  )}
                </TooltipTrigger>
                <TooltipContent className="max-w-xs text-sm">
                  {s.cite.note}
                </TooltipContent>
              </Tooltip>
            </div>
          ))}
        </div>

        <p className="mt-10 text-xs text-white/50 max-w-3xl mx-auto">
          Sources: Centers for Medicare &amp; Medicaid Services (2023); Farahani et al.,
          Journal of Hospital Medicine (2026); De Lathauwer et al., European Journal of
          Heart Failure (2025); Scientific Reports (2023).
        </p>
      </div>
    </section>
  );
};

export default PostDischargeEvidence;
