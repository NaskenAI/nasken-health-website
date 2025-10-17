import { Helmet } from "react-helmet-async";
import React from "react";
import { Link } from "react-router-dom";

const Privacy = () => {
  const updated = "30-Apr-2025";

  return (
    <main className="bg-white">
      <Helmet>
        <title>Privacy Policy — Nasken Health</title>
        <meta
          name="description"
          content="Read the Privacy Policy for Nasken Health. Learn how we collect, use, and protect your personal information when you use our AI-driven health services."
        />
        <link rel="canonical" href="https://www.naskenhealth.com/privacy" />
      </Helmet>

      <section className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-2">
          Privacy Policy
        </h1>
        <p className="text-slate-600 mb-8">
          Last Updated On {updated} · Effective Date {updated}
        </p>

        <p className="text-slate-700 mb-6">
          This Privacy Policy describes how <strong>Nasken Inc. (d/b/a Nasken Health)</strong>,
          867 Boylston Street, 5th Floor, Boston, MA 02116, USA
          (<a className="text-sky-700" href="mailto:contact@nasken.ai">contact@nasken.ai</a>)
          collects, uses, and discloses information when you use our website
          (<span className="text-slate-900">https://www.naskenhealth.com</span>) (the “Service”).
          By accessing or using the Service, you consent to this Policy. If you do not agree,
          please do not use the Service.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Changes to this Policy</h2>
        <p className="text-slate-700 mb-6">
          We may update this Policy at any time. The “Last Updated” date above reflects the latest version.
          Continued use after an update means you accept the changes.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Information We Collect</h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-700 mb-6">
          <li><strong>Contact data</strong> you submit (name, email, phone, organization, message).</li>
          <li><strong>Usage data</strong> (pages viewed, device, browser) via cookies or similar tech.</li>
          <li><strong>Communications</strong> and responses if you contact us.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">How We Use Information</h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-700 mb-6">
          <li>Respond to inquiries, demo requests, and partnership outreach.</li>
          <li>Operate, secure, and improve the Service, including analytics.</li>
          <li>Comply with legal obligations and enforce terms.</li>
          <li>With consent, send updates or research invitations. You can opt out anytime.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Legal Bases (EU/UK)</h2>
        <p className="text-slate-700 mb-6">
          We process personal data under one or more of: consent, contract performance,
          legitimate interests (site security, basic analytics), legal obligation.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Sharing of Information</h2>
        <p className="text-slate-700 mb-2">
          We do not sell personal information. We may share with:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-700 mb-6">
          <li><strong>Service providers</strong> (e.g., hosting, analytics, form handling) bound by contract.</li>
          <li>Authorities or others when required by law or to protect rights and safety.</li>
          <li>A successor entity in a merger, acquisition, or asset transfer.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Data Retention</h2>
        <p className="text-slate-700 mb-6">
          We retain personal information only as long as needed for the purposes above,
          then delete or anonymize it, unless a longer period is required by law.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Security</h2>
        <p className="text-slate-700 mb-6">
          We use reasonable technical and organizational measures (encryption in transit,
          access controls, logging). No method is 100% secure; transmission is at your own risk.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Cookies and Similar Technologies</h2>
        <p className="text-slate-700 mb-4">
          We may use cookies and similar tech for essential functions and basic analytics.
          You can control cookies in your browser. For details, see our{" "}
          <Link to="/cookies" className="text-sky-700">Cookie Policy</Link>.
        </p>
        <button
          type="button"
          onClick={() => (window as any).revisitConsent?.()}
          className="inline-flex items-center px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-800"
        >
          Revisit consent
        </button>

        <h2 className="text-2xl font-semibold mt-8 mb-3">International Transfers</h2>
        <p className="text-slate-700 mb-6">
          If you access the Service from outside the United States, your data may be processed
          in the U.S. and other countries. Where required, we use appropriate safeguards.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Your Rights</h2>
        <p className="text-slate-700 mb-2">
          Depending on your location, you may have rights to access, correct, delete, restrict,
          object to processing, or request portability of your personal data, and to withdraw consent.
        </p>
        <p className="text-slate-700 mb-6">
          To exercise rights, contact{" "}
          <a className="text-sky-700" href="mailto:contact@nasken.ai">contact@nasken.ai</a>.
          You may also lodge a complaint with your supervisory authority.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Children’s Privacy</h2>
        <p className="text-slate-700 mb-6">
          The Service is not directed to children under 13 (or as defined by local law),
          and we do not knowingly collect their personal information.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Third-Party Links</h2>
        <p className="text-slate-700 mb-6">
          The Service may link to third-party sites. Their privacy practices are governed
          by their own policies. Review those policies when visiting external sites.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Contact</h2>
        <p className="text-slate-700">
          For questions about this Policy or our data practices, contact:
          <br />
          <strong>Nasken Inc. · Nasken Health</strong>
          <br />
          867 Boylston Street, 5th Floor, Boston, MA 02116, USA
          <br />
          <a className="text-sky-700" href="mailto:contact@nasken.ai">contact@nasken.ai</a>
        </p>
      </section>
    </main>
  );
};

export default Privacy;
