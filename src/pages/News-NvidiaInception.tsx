import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer-2";

export default function NvidiaInception() {
  return (
    <main className="bg-white text-ink-900">
      <Helmet>
        <title>Nasken Health Joins NVIDIA Inception Program</title>
        <meta
          name="description"
          content="Nasken Health has joined the NVIDIA Inception Program to accelerate innovation in trustworthy, privacy-preserving AI for healthcare."
        />
        <link
          rel="canonical"
          href="https://www.naskenhealth.com/news/nvidia-inception"
        />
      </Helmet>

      {/* Header */}
      <section className="section py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-3">
          Nasken Health Joins NVIDIA Inception Program
        </h1>
        <p className="text-ink-900/70 max-w-2xl mx-auto">
          Empowering innovation in responsible AI for healthcare with support
          from NVIDIA.
        </p>
      </section>

      {/* Content */}
      <section className="section pb-20 max-w-3xl mx-auto px-6 leading-relaxed text-ink-900/80">
        <p className="mb-4">
          <strong>November 4, 2025 — Boston, MA</strong> — Nasken Health is proud to
          announce that we’ve been accepted into the{" "}
          <a
            href="https://www.nvidia.com/en-us/startups/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-leaf-600 underline hover:text-leaf-700"
          >
            NVIDIA Inception Program
          </a>
          , a global initiative designed to support startups revolutionizing
          industries with AI and data science.
        </p>

        <p className="mb-4">
          The program provides access to <strong>NVIDIA’s cutting-edge
          resources</strong>, including technical guidance, infrastructure
          credits, and go-to-market support, helping Nasken accelerate the
          development of privacy-preserving, intelligent health systems.
        </p>

        <p className="mb-4">
          <em>
            “Joining NVIDIA Inception reinforces our commitment to scaling
            responsible AI in healthcare,”
          </em>{" "}
          said <strong>Sandesh GV</strong>, Founder & CEO of Nasken Health. “With
          NVIDIA’s support, we can advance AI systems that improve patient
          outcomes while maintaining trust, privacy, and clinical integrity.”
        </p>

        <p className="mb-4">
          Nasken Health develops AI-powered digital health platforms that
          integrate journaling, clinical NLP, and predictive analytics to help
          patients and providers monitor well-being through connected,
          privacy-first data insights.
        </p>

        <p>
          Learn more at{" "}
          <a
            href="https://www.naskenhealth.com"
            className="text-leaf-600 underline hover:text-leaf-700"
          >
            www.naskenhealth.com
          </a>
          .
        </p>
      </section>

      <Footer />
    </main>
  );
}
