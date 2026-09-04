import { Mail, Users, FileText } from "lucide-react";

const Contact = () => {
  const contactTypes = [
    {
      icon: <Users className="w-6 h-6 text-leaf-400" />,
      title: "Partnerships",
      description: "Clinical collaborations and research partnerships",
    },
    {
      icon: <FileText className="w-6 h-6 text-leaf-400" />,
      title: "Research Collaboration",
      description: "Academic partnerships and joint research initiatives",
    },
    {
      icon: <Mail className="w-6 h-6 text-leaf-400" />,
      title: "General Contact",
      description:
        "For all other inquiries or to discuss how Nasken Health can support your organization's digital health initiatives",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-ink-900 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-white mb-4">
          Contact & Partnerships
        </h2>
        <p className="text-lg text-white/80 max-w-3xl mx-auto">
          We welcome conversations that advance digital health innovation. Reach out to
          explore collaboration or partnership opportunities.
        </p>
        <p className="mt-6 flex items-center justify-center gap-2 text-white/80">
          <Mail className="w-4 h-4 text-leaf-400" />
          <a
            href="mailto:contact@nasken.ai"
            className="hover:text-leaf-300 underline underline-offset-4"
          >
            contact@nasken.ai
          </a>
        </p>
      </div>

      <div className="section grid md:grid-cols-3 gap-8 mb-12">
        {contactTypes.map((contact, index) => (
          <div
            key={index}
            className="rounded-xl border border-white/10 text-center p-8 hover:shadow-soft transition"
            style={{ background: "var(--card)" }}
          >
            <div className="flex justify-center mb-4">{contact.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{contact.title}</h3>
            <p className="text-sm text-white/70 mb-6">{contact.description}</p>
            <a
              href="mailto:contact@nasken.ai"
              className="inline-flex items-center justify-center rounded-lg px-5 py-3 font-medium text-gray-900 bg-white hover:bg-gray-100 transition shadow-sm"
            >
              Contact Us
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
