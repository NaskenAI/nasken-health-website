// src/components/Traction.tsx
const Traction = () => {
  const stats = [
    { value: "150+", label: "Beta journaling sessions analyzed" },
    { value: "5", label: "Partner clinicians participating in pilot" },
    { value: "3", label: "Active research collaborations in progress" },
    { value: "90%", label: "Positive feedback from early pilot users" },
  ];

  return (
    <section id="traction" className="py-20 bg-ink-800 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold mb-4 text-leaf-400">
          Early Results & Traction
        </h2>
        <p className="text-white/80 max-w-3xl mx-auto mb-12 text-lg">
          Nasken Health is currently in early pilot deployment, validating its
          journaling and AI-assisted insight platform with clinicians and
          behavioral health researchers.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 p-6 shadow-sm hover:shadow-soft transition bg-ink-900/40"
            >
              <div className="text-3xl md:text-4xl font-semibold text-white mb-3">
                {s.value}
              </div>
              <div className="text-sm md:text-base text-white/70 leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto text-white/70 text-base leading-relaxed">
          Our pilot focuses on journaling engagement, clinician workload reduction,
          and clinical insight accuracy — foundational metrics for next-stage
          AI-driven health platforms.
        </div>
      </div>
    </section>
  );
};

export default Traction;
