import React from "react";

const Stats = () => {
  const stats = [
    { value: "1 in 5", label: "Adults experience mental-health challenges each year (APA 2024)" },
    { value: "75%", label: "Therapists report session time lost to manual note-taking and summaries" },
    { value: "60–70%", label: "Patients drop out of therapy before completing recommended sessions" },
    { value: "3x", label: "Higher engagement when journaling is guided and AI-summarized" },
    { value: "50%", label: "Reduction in clinician burnout with automated documentation tools" },
    { value: "90%", label: "Clinicians say better between-session data improves treatment precision" },
  ];

  return (
    <section className="bg-indigo-50 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Why AI-Assisted Journaling Matters
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-10">
          Millions struggle to express emotions consistently between sessions.
          AI-assisted journaling bridges that gap—transforming reflections into
          structured insights clinicians can act on.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm p-6 border hover:shadow-md transition"
            >
              <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-1">
                {s.value}
              </div>
              <div className="text-sm md:text-base text-slate-700 leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
