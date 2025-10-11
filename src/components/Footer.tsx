import { Separator } from "@/components/ui/separator";
import { LinkedinIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-healthcare-slate text-white py-12">
      <div className="healthcare-section">
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
            <nav className="absolute top-6 right-6 flex gap-6 z-20">
              <button onClick={() => scrollTo("about")} className="text-gray-700 font-medium hover:text-healthcare-teal">
                About
              </button>
              <button onClick={() => scrollTo("research")} className="text-gray-700 font-medium hover:text-healthcare-teal">
                Research
              </button>
              <button onClick={() => scrollTo("technology")} className="text-gray-700 font-medium hover:text-healthcare-teal">
                Technology
              </button>
              <button onClick={() => scrollTo("contact")} className="text-gray-700 font-medium hover:text-healthcare-teal">
                Contact
              </button>
              <Link to="/fellowships" className="text-gray-700 font-medium hover:text-healthcare-teal">
                Nasken AI Health Fellowships
              </Link>
            </nav>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="font-semibold mb-4">Legal & Social</h4>
            <div className="space-y-2 mb-4">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200">
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
