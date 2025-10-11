import { Separator } from "@/components/ui/separator";
import { LinkedinIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-healthcare-slate text-white py-12">
      <div className="healthcare-section max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nasken Health</h3>
            <p className="text-gray-300 leading-relaxed">
              Developing AI-powered tools to advance digital healthcare through
              evidence-based research and clinical innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => handleScroll("about")}
                className="text-gray-300 hover:text-healthcare-teal text-left"
              >
                About
              </button>
              <button
                onClick={() => handleScroll("research")}
                className="text-gray-300 hover:text-healthcare-teal text-left"
              >
                Research
              </button>
              <button
                onClick={() => handleScroll("technology")}
                className="text-gray-300 hover:text-healthcare-teal text-left"
              >
                Technology
              </button>
              <button
                onClick={() => handleScroll("contact")}
                className="text-gray-300 hover:text-healthcare-teal text-left"
              >
                Contact
              </button>
              <Link
                to="/fellowships"
                className="text-gray-300 hover:text-healthcare-teal"
              >
                Nasken AI Health Fellowships
              </Link>
            </nav>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="font-semibold mb-4">Legal & Social</h4>
            <div className="space-y-2 mb-4">
              <a
                href="/privacy"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </a>
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

        <div className="text-center text-gray-300">
          <p>&copy; 2025 Nasken Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
