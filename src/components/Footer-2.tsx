import { LinkedinIcon, MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-ink-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* top grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company / Address */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Nasken Health</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              A unit of Nasken Inc. Building privacy-preserving clinical AI.
            </p>
            <div className="space-y-2 text-sm text-white/80">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-leaf-400" />
                <span>
                  867 Boylston Street, 5th Floor
                  <br />
                  Boston, MA 02116, USA
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-leaf-400" />
                <a
                  href="mailto:contact@nasken.ai"
                  className="hover:text-leaf-300 underline underline-offset-4"
                >
                  contact@nasken.ai
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2 text-white/80">
              <Link to="/fellowships" className="hover:text-white">
                Home
              </Link>
              <Link to="/fellowships" className="hover:text-white">
                Team
              </Link>
              <Link to="/fellowships" className="hover:text-white">
                Careers
              </Link>
              <Link to="/fel
              <Link to="/fellowships" className="hover:text-white">
                Contact
              </Link>
              <Link to="/fellowships" className="hover:text-white">
                Nasken AI Health Fellowships
              </Link>
            </nav>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Social</h4>
            <div className="flex items-center space-x-5">
              <a
                href="https://www.linkedin.com/company/nasken-health/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white/80 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-5 h-5 mr-2 text-leaf-400" />
                LinkedIn
              </a>
              <a
                href="https://www.facebook.com/naskenhealth"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white/80 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 text-leaf-400"
                >
                  <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24h11.495v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.657-4.788 1.324 0 2.463.098 2.795.142v3.24l-1.92.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.588l-.467 3.622h-3.121V24h6.117C23.407 24 24 23.407 24 22.676V1.324C24 .593 23.407 0 22.676 0" />
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="h-px w-full bg-white/10 mb-6" />

        {/* bottom bar */}
        <div className="text-center text-white/70 text-sm">
          <p>© {new Date().getFullYear()} Nasken Inc. All rights reserved.</p>
          <p className="mt-2">
            <Link to="/privacy" className="hover:text-white underline underline-offset-4">
              Privacy Policy
            </Link>{" "}
            ·{" "}
            <Link to="/terms" className="hover:text-white underline underline-offset-4">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
