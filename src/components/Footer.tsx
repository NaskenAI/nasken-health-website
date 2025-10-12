import { Separator } from "@/components/ui/separator";
import { LinkedinIcon, MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-healthcare-slate text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* top grid */}
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
                  867 Boylston Street, 5th Floor
                  <br />
                  Boston, MA 02116, USA
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:contact@nasken.ai"
                  className="hover:text-healthcare-teal"
                >
                  contact@nasken.ai
                </a>
              </p>
            </div>
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

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Social Media</h4>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.linkedin.com/company/nasken-health/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-healthcare-teal transition-colors duration-200"
              >
                <LinkedinIcon className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
              <a
                href="https://www.facebook.com/naskenhealth"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-healthcare-teal transition-colors duration-200"
              >
                {/* Facebook icon (inline SVG) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-2"
                  aria-hidden="true"
                >
                  <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24h11.495v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.657-4.788 1.324 0 2.463.098 2.795.142v3.24l-1.92.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.588l-.467 3.622h-3.121V24h6.117C23.407 24 24 23.407 24 22.676V1.324C24 .593 23.407 0 22.676 0" />
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-600 mb-6" />

        {/* bottom bar */}
        <div className="text-center text-gray-300 text-sm">
          <p>© {new Date().getFullYear()} Nasken Inc. All rights reserved.</p>
          <p className="mt-2">
            <a href="/privacy" className="hover:text-white">
              Privacy Policy
            </a>{" "}
            ·{" "}
            <a href="/terms" className="hover:text-white">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
