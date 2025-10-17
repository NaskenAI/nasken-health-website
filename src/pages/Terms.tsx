import { Helmet } from "react-helmet-async";
import React from "react";

const Terms = () => {
  return (
    <main className="bg-white">
      <Helmet>
        <title>Terms of Service — Nasken Health</title>
        <meta
          name="description"
          content="Review the Terms of Service for Nasken Health. Learn about user responsibilities, intellectual property, disclaimers, and applicable law for use of our website."
        />
        <link rel="canonical" href="https://www.naskenhealth.com/terms" />
      </Helmet>

      <section className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
          Terms of Service
        </h1>

        <p className="text-slate-700 mb-6">
          NASKEN INC. (“Nasken Health”), responsible for this website,
          informs all users of the terms and conditions applicable when
          accessing and using this website.
        </p>

        <p className="text-slate-700 mb-6">
          By accessing this website, you are considered a user and agree to comply
          with the terms outlined here as well as any applicable laws and regulations.
          Nasken Inc. reserves the right to modify any content or terms at any time
          without prior notice. The latest version will always be available on this page.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Identification Data</h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-700 mb-6">
          <li><strong>Domain name:</strong> https://www.naskenhealth.com</li>
          <li><strong>Trade name:</strong> Nasken Health</li>
          <li><strong>Corporate name:</strong> Nasken Inc.</li>
          <li><strong>Company registration:</strong> Delaware C-Corp</li>
          <li><strong>Registered office:</strong> 867 Boylston Street, 5th Floor, Boston, MA 02116, USA</li>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:contact@nasken.ai" className="text-sky-700">
              contact@nasken.ai
            </a>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          Intellectual and Industrial Property Rights
        </h2>
        <p className="text-slate-700 mb-6">
          The website and its contents, including text, graphics, trademarks, logos,
          and source code, are the property of Nasken Inc. or licensed third parties.
          They are protected by U.S. and international intellectual property laws.
          Reproduction, distribution, modification, or public communication of any
          content without prior written authorization is strictly prohibited.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Disclaimer of Liability</h2>
        <p className="text-slate-700 mb-6">
          Nasken Inc. is not responsible for any improper or unlawful use of the
          website or its contents. The company assumes no responsibility for
          technical issues or service interruptions beyond its control, nor for
          damages that may arise from the use of external links or third-party sites.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">User Obligations</h2>
        <p className="text-slate-700 mb-6">
          Users agree to use this website lawfully, avoiding activities that may
          harm Nasken Inc., other users, or the website infrastructure.
          Uploading malicious code, spam, or false information is prohibited.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Third-Party Links</h2>
        <p className="text-slate-700 mb-6">
          This website may contain links to external resources.
          Nasken Inc. is not responsible for the accuracy, availability, or content
          of third-party websites. Use of external links is at the user’s own risk.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Privacy and Cookies</h2>
        <p className="text-slate-700 mb-6">
          Use of this website is also subject to our{" "}
          <a href="/privacy" className="text-sky-700 underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="/cookies" className="text-sky-700 underline">
            Cookie Policy
          </a>
          . Users can revisit consent settings below.
        </p>
        <button
          type="button"
          onClick={() => (window as any).revisitConsent?.()}
          className="inline-flex items-center px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-800"
        >
          Revisit consent
        </button>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Limitation of Liability</h2>
        <p className="text-slate-700 mb-6">
          Nasken Inc. will not be liable for indirect, incidental, or consequential
          damages arising from use or inability to use this website, even if advised
          of the possibility of such damages. Content is provided “as is” without warranty.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Applicable Law and Jurisdiction</h2>
        <p className="text-slate-700 mb-6">
          These Terms are governed by and construed in accordance with the laws of
          the Commonwealth of Massachusetts, United States. Users agree that any disputes
          arising from or related to this website shall be subject to the exclusive
          jurisdiction of the courts located in Boston, MA.
        </p>

        <p className="text-slate-700 mt-10">
          For questions about these Terms, contact{" "}
          <a href="mailto:contact@nasken.ai" className="text-sky-700">
            contact@nasken.ai
          </a>.
        </p>
      </section>

      {/* Footer */}
      <section className="bg-ink-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="text-2xl font-semibold">Nasken Health</div>
            <p className="mt-2 text-white/80">AI-powered clinical insights</p>
          </div>
          <ul className="text-white/80 space-y-2">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#technology" className="hover:text-white">Technology</a></li>
            <li><a href="#media" className="hover:text-white">News</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
            <li><a href="https://www.linkedin.com/company/nasken-health/" className="hover:text-white">LinkedIn</a></li>
          </ul>
        </div>
        <div className="max-w-6xl mx-auto px-4 pb-10 text-xs text-white/60 space-y-2">
          <p>© {new Date().getFullYear()} Nasken Inc. All rights reserved.</p>
          <p>867 Boylston Street, 5th Floor, Boston, MA 02116, USA</p>
          <p>
            <a href="/privacy" className="hover:text-white">Privacy Policy</a> ·{" "}
            <a href="/terms" className="hover:text-white">Terms of Service</a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Terms;
