import { Link } from "react-router-dom";
import { STUDIO } from "@/lib/studio";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-olive/20 py-12 px-5 md:px-8 bg-ink" data-testid="site-footer">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 bg-olive rounded-full" />
          <span className="font-display tracking-[0.22em] text-cream text-sm">{STUDIO.name}</span>
          <span className="text-cream/40 text-xs tracking-[0.2em] uppercase hidden md:inline">
            — {STUDIO.tagline}
          </span>
        </div>
        <nav className="flex flex-wrap items-center gap-6 text-[11px] tracking-[0.22em] uppercase text-cream/60">
          <Link to="/" className="hover:text-cream" data-testid="footer-home">Home</Link>
          <Link to="/artists" className="hover:text-cream" data-testid="footer-artists">Artists</Link>
          <a href="#services" className="hover:text-cream">Services</a>
          <a href="#gallery" className="hover:text-cream">Work</a>
          <a href="#contact" className="hover:text-cream">Visit</a>
          <a
            href={`https://instagram.com/${STUDIO.instagram.replace("@", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cream inline-flex items-center gap-2"
            data-testid="footer-instagram"
          >
            <Instagram size={14} strokeWidth={1.5} />
            {STUDIO.instagram}
          </a>
        </nav>
      </div>
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-olive/10 flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] tracking-[0.24em] uppercase text-cream/40">
        <span>© {new Date().getFullYear()} {STUDIO.name} · All rights reserved</span>
        <span>Hand-drawn in Brooklyn</span>
      </div>
    </footer>
  );
}
