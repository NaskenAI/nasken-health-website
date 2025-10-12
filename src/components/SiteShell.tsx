// src/components/SiteShell.tsx
import { Link } from "react-router-dom";
export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="font-semibold">Nasken Health</Link>
          <div className="flex items-center gap-6 text-sm">
            <Link to="/fellowships" className="hover:underline">Fellowships</Link>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-slate-600">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="font-medium mb-2">About</div>
              <p>Privacy-preserving clinical AI for usable insights.</p>
            </div>
            <div>
              <div className="font-medium mb-2">Trust</div>
              <ul className="space-y-1 list-disc pl-5">
                <li>HIPAA-aligned security</li>
                <li>Encryption in transit/at rest</li>
                <li>Audit logging & RBAC</li>
              </ul>
            </div>
            <div id="contact">
              <div className="font-medium mb-2">Contact</div>
              <a className="underline" href="mailto:contact@nasken.ai">contact@nasken.ai</a>
            </div>
          </div>
          <div className="mt-6 text-xs">© {new Date().getFullYear()} Nasken Health</div>
        </div>
      </footer>
    </div>
  );
}
