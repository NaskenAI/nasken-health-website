export default function Hero() {
  return (
    <section style={{ background:"var(--hero)" }}>
      <div className="section py-18 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="h1 text-white">Clinical insights from everyday narratives</h1>
          <p className="mt-4 text-white/80">
            AI journaling and summarization that turns reflections into clinician-ready context.
          </p>
          <div className="mt-6 flex gap-3">
            <a className="rounded-lg px-5 py-3 font-medium text-ink-900 bg-white hover:opacity-90" href="#contact">Get early access</a>
            <a className="rounded-lg px-5 py-3 font-medium border border-white/30 text-white hover:bg-white/10" href="#technology">See technology</a>
          </div>
          <p className="mt-6 text-xs text-white/60">HIPAA-aligned • FHIR/HL7 • Audit trails</p>
        </div>

        <div className="relative">
          <div className="rounded-xl border border-white/12" style={{ background:"var(--card)" }}>
            <div className="aspect-[4/3] rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
