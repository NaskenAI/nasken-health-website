import { Separator } from "@/components/ui/separator";
import { LinkedinIcon, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-healthcare-slate text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company / Address */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nasken Health</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              A unit of Nasken Inc. Building privacy-preserving clinical AI.
            </p>
            <div className="space-y-2 text-sm text-gray-200">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>
                  867 Boylston Street, 5th Floor<br />Boston, MA 02116, USA
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:contact@nasken.ai" className="hover:text-healthcare-teal">
                  contact@nasken.ai
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <button onClick={() => handleScroll("about")} className="text-gray-300 hover:text-healthcare-teal text-left">
                About
              </button>
              <button onClick={() => handleScroll("research")} className="text-gray-300 hover:text-healthcare-teal text-left">
                Research
              </button>
              <button onClick={() => handleScroll("technology")} className="text-gray-300 hover:text-healthcare-teal text-left">
                Technology
              </button>
              <button onClick={() => handleScroll("contact")} className="text-gray-300 hover:text-healthcare-teal text-left">
                Contact
              </button>
              <Link to="/fellowships" className="text-gray-300 hover:text-healthcare-teal">
                Nasken AI Health Fellowships
              </Link>
            </nav>
          </div>

          {/* Contacts & Social */}
          <div>
            <h4 className="font-semibold mb-4">Contact Channels</h4>
            <div className="space-y-2 text-sm text-gray-200 mb-4">
              <a href="mailto:research@nasken.ai" className="hover:text-healthcare-teal">Research · contact@nasken.ai</a><br />
              <a href="mailto:partners@nasken.ai" className="hover:text-healthcare-teal">Partnerships · contact@nasken.ai</a><br />
            </div>
            <a
              href="https://www.linkedin.com/company/nasken-health/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-300 hover:text-white transition-colors duration-200"
            >
              <LinkedinIcon className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </div>
        </div>

        <Separator className="bg-gray-600 mb-6" />
        <div className="text-center text-gray-300 text-sm">
          <p>© {new Date().getFullYear()} Nasken Inc. All rights reserved.</p>
          <p className="mt-2">
            <a href="/privacy" className="hover:text-white">Privacy Policy</a> ·{" "}
            <a href="/terms" className="hover:text-white">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
