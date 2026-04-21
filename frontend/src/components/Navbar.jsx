import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { STUDIO } from "@/lib/studio";

const links = [
  { to: "/", label: "Home" },
  { to: "/artists", label: "Artists" },
  { to: "/#services", label: "Services" },
  { to: "/#gallery", label: "Work" },
  { to: "/#contact", label: "Visit" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-ink/70 border-b border-olive/20"
      data-testid="site-navbar"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 group"
          data-testid="navbar-logo-link"
        >
          <span className="h-2 w-2 bg-olive rounded-full group-hover:scale-150 transition-transform" />
          <span className="font-display font-semibold tracking-[0.22em] text-cream text-sm md:text-base">
            {STUDIO.name}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10" aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `text-[13px] tracking-wider uppercase font-body transition-colors ${
                  isActive
                    ? "text-cream"
                    : "text-cream/60 hover:text-cream"
                }`
              }
              data-testid={`nav-link-${l.label.toLowerCase()}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <a
          href="#final-cta"
          className="hidden md:inline-flex items-center gap-2 border border-olive/60 hover:border-olive hover:bg-olive/10 text-cream px-5 py-2.5 text-xs tracking-[0.2em] uppercase transition-all"
          data-testid="navbar-book-btn"
        >
          Book
          <span className="h-1 w-1 bg-olive rounded-full" />
        </a>

        <button
          className="md:hidden text-cream p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          data-testid="navbar-mobile-toggle"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-olive/20 bg-ink/95 backdrop-blur-xl">
          <div className="px-5 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-cream/80 hover:text-cream text-sm tracking-[0.2em] uppercase"
                data-testid={`nav-mobile-${l.label.toLowerCase()}`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="#final-cta"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center border border-olive text-cream px-5 py-3 text-xs tracking-[0.2em] uppercase bg-olive/10"
              data-testid="navbar-mobile-book-btn"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
