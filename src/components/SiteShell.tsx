import { Link, NavLink } from "react-router-dom";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-ink-900 text-white">
      <header className="border-b border-white/10">
        <nav className="section h-16 flex items-center justify-between">
          <Link to="/" className="font-semibold tracking-tight">Nasken Health</Link>
          <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#solutions" className="hover:text-white">Solutions</a>
            <a href="#technology" className="hover:text-white">Technology</a>
            <a href="#media" className="hover:text-white">News</a>
            <NavLink to="/fellowships" className="hover:text-white">Fellowships</NavLink>
          </div>
          <a
            href="#contact"
            className="rounded-lg px-4 py-2 text-sm font-medium shadow-soft"
            style={{ background:"var(--btn)" }}
          >
            Request demo
          </a>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
