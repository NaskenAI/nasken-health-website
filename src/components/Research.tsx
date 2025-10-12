import React from "react";

const Research = () => {
  const stats = [
    { value: "1 in 5", label: "Adults experience mental-health challenges each year (APA 2024)" },
    { value: "75%", label: "Therapists report session time lost to manual note-taking and summaries" },
    { value: "60–70%", label: "Patients drop out of therapy before completing recommended sessions" },
    { value: "3x", label: "Higher engagement when journaling is guided and AI-summarized" },
    { value: "50%", label: "Reduction in clinician burnout with automated documentation tools" },
    { value: "90%", label: "Clinicians say better between-session data improves treatment precision" },
  ];

  return (
    <section id="research" className="py-20 bg-ink-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold text-leaf-400 mb-4">
          Why AI-Assisted Journaling Matters
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-12 text-lg">
          Millions struggle to express emotions consistently between sessions.
          AI-assisted journaling bridges that gap—turning reflections into
          structured insights clinicians can act on.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((s, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 p-6 shadow-sm hover:shadow-soft transition"
              style={{ background: "var(--card)" }}
            >
              <div className="text-3xl md:text-4xl font-semibold text-leaf-400 mb-2">
                {s.value}
              </div>
              <div className="text-sm md:text-base text-white/70 leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
