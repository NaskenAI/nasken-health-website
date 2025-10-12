import React from "react";
import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="bg-white text-slate-800">
      <section className="max-w-6xl mx-auto px-4 pt-20 pb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
          AI-Powered Clinical Insights
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          We transform unstructured health information into clinician-ready insights with a privacy-first architecture.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <a href="#ea"><Button className="bg-sky-600 hover:bg-sky-700 text-white px-5 py-3">Request Access</Button></a>
          <a href="#learn" className="rounded-lg px-5 py-3 border border-slate-300 hover:bg-slate-50">Learn More</a>
        </div>
      </section>

      <section id="learn" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">What we enable</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Convert narratives and notes into structured summaries clinicians trust.</li>
          <li>Surface longitudinal patterns and risk signals for continuous care.</li>
          <li>Integrate via standards-based APIs (FHIR/HL7) without workflow friction.</li>
        </ul>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12 bg-slate-50">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Our technology</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Domain-adapted language models for health text.</li>
          <li>Data minimization, encryption, RBAC, and audit trails by design.</li>
          <li>Model governance with transparent change control and evaluation.</li>
        </ul>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Trust & compliance</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>HIPAA-aligned controls; encrypted in transit and at rest.</li>
          <li>Scoped retention; environment isolation; access logging.</li>
          <li>Clinical validation with pilot partners; ethical review.</li>
        </ul>
      </section>

      <section id="ea" className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Join early access</h2>
        <p className="max-w-xl mx-auto mb-6">We’re onboarding select providers and researchers. Details under NDA.</p>
        <form className="max-w-md mx-auto grid gap-3" action="https://formspree.io/f/mayvlxyz" method="POST">
          <input className="border rounded-lg p-3" name="name" placeholder="Name" required />
          <input className="border rounded-lg p-3" name="email" type="email" placeholder="Work email" required />
          <input className="border rounded-lg p-3" name="organization" placeholder="Organization" />
          <textarea className="border rounded-lg p-3" name="message" rows={3} placeholder="How you plan to use it (optional)" />
          <Button type="submit" className="bg-sky-600 hover:bg-sky-700 text-white px-5 py-3">Request Access</Button>
        </form>
      </section>
    </div>
  );
}
