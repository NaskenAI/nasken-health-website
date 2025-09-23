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
            <nav className="space-y-2">
              <a href="#about" className="block text-gray-300 hover:text-white transition-colors duration-200">
                About
              </a>
              <a href="#research" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Research
              </a>
              <a href="#technology" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Technology
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Contact
              </a>
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
              href="#" 
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