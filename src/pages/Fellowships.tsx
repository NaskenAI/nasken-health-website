// src/pages/Fellowships.tsx
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer-2";

const Fellowships = () => {
  return (
    <main className="bg-white text-ink-900">
      <section className="min-h-screen px-6 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Heading + meta */}
          <h1 className="text-4xl font-bold mb-2">
            Fellowship — Honors/Graduate Psychology Student – Digital Mental Health
          </h1>
          <div className="text-sm text-slate-600 mb-8 flex flex-wrap gap-4">
            <span>
              Date posted: <time dateTime="2025-10-01">October 1, 2025</time>
            </span>
            <span>
              Contact:{" "}
              <a href="mailto:contact@nasken.ai" className="underline">
                contact@nasken.ai
              </a>
            </span>
          </div>

          <p className="text-slate-700 mb-8">
            Pilot study on patient-generated data between therapy sessions to enhance engagement and outcomes.
            Participants will use a lightweight mobile MVP that may include AI-assisted features.
          </p>

          <h2 className="text-2xl font-semibold mb-3">Job description</h2>
          <p className="text-slate-700 mb-4">
            We are conducting a pilot study to examine how patient-generated data, collected between therapy sessions,
            may enhance patient engagement and improve therapeutic outcomes. Participants will utilize a lightweight
            mobile MVP application, which may incorporate AI-assisted features.
          </p>
          <p className="text-slate-700 mb-4">
            We are looking for a graduate/undergraduate psychology student (Senior (honors)/MA/MS/PhD) who is interested in:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-700">
            <li>Using this pilot as part of a thesis or capstone project.</li>
            <li>Helping refine the study design (recruitment strategy, consent process, outcome measures).</li>
            <li>Collecting and analyzing data from patients and therapists.</li>
            <li>Potentially co-authoring a publication or conference poster.</li>
          </ul>
          <p className="text-slate-700 mb-8">Senior psychology undergraduates are encouraged to apply.</p>

          <h2 className="text-2xl font-semibold mb-3">Eligibility</h2>
          <ul className="list-disc pl-6 space-y-2 mb-8 text-slate-700">
            <li>Enrolled in a graduate program in Counseling, Clinical Psychology, or a related field.</li>
            <li>Interest in digital mental health, journaling, or therapy research.</li>
            <li>Strong communication and organizational skills.</li>
            <li>Comfortable collaborating on applied projects outside a traditional lab.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-3">Benefits</h2>
          <ul className="list-disc pl-6 space-y-2 mb-8 text-slate-700">
            <li>A ready-to-go applied research project with technical support provided.</li>
            <li>Opportunity to integrate with thesis, practicum, or academic credit (with faculty approval).</li>
            <li>Co-authorship potential on a publication or whitepaper.</li>
            <li>Hands-on experience at the intersection of psychology and AI-powered health technology.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-3">Commitment</h2>
          <ul className="list-disc pl-6 space-y-2 mb-8 text-slate-700">
            <li>Flexible, part-time (~3–5 hours/week).</li>
            <li>
              Duration: ~16–20 weeks total, including:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Preparation phase (4–8 weeks): study design, recruitment, consent form development.</li>
                <li>Pilot phase (8–12 weeks): active data collection with patients and therapists.</li>
              </ul>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-3">Compensation</h2>
          <ul className="list-disc pl-6 space-y-2 mb-8 text-slate-700">
            <li>Educational stipend support provided for the duration of the study.</li>
            <li>Academic credit and thesis support (if applicable).</li>
          </ul>

          <div className="border border-amber-300 bg-amber-50 text-amber-900 p-4 rounded-md mb-10">
            <strong>Note:</strong> We can also consider recent graduates. However, they must have a faculty member to
            collaborate with, since this is a research project requiring IRB approval. For this reason, it is generally
            easier for current graduate students to participate.
          </div>

          <div className="flex gap-4">
            <Button
              className="px-6"
              onClick={() =>
                window.open(
                  "mailto:contact@nasken.ai?subject=Fellowship%20Application&body=Please%20attach%20your%20CV%20and%20a%20short%20statement%20of%20interest.",
                  "_blank"
                )
              }
            >
              Apply via Email
            </Button>
            <a href="mailto:contact@nasken.ai" className="underline text-leaf-600 self-center">
              Contact: contact@nasken.ai
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Fellowships;
