import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { artists } from "@/lib/studio";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function ArtistDetail() {
  const { slug } = useParams();
  const artist = artists.find((a) => a.slug === slug);
  const [active, setActive] = useState(null);

  if (!artist) return <Navigate to="/artists" replace />;

  const close = () => setActive(null);
  const next = () => setActive((i) => (i + 1) % artist.portfolio.length);
  const prev = () => setActive((i) => (i - 1 + artist.portfolio.length) % artist.portfolio.length);

  return (
    <div className="pt-28 md:pt-32 pb-24 px-5 md:px-8" data-testid="artist-detail-page">
      <div className="max-w-7xl mx-auto">
        <Link
          to="/artists"
          className="inline-flex items-center gap-2 text-cream/60 hover:text-cream text-[11px] tracking-[0.24em] uppercase mb-10"
          data-testid="artist-back-link"
        >
          <ArrowLeft size={14} /> All artists
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden border border-olive/30">
              <img src={artist.image} alt={artist.name} className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7 lg:pt-10">
            <div className="text-[10px] tracking-[0.34em] uppercase text-olive font-semibold mb-4">
              · Resident artist
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-cream leading-[0.95]">
              {artist.name}
            </h1>
            <div className="mt-5 text-[11px] tracking-[0.24em] uppercase text-olive">
              {artist.specialty}
            </div>
            <p className="mt-7 text-cream/65 text-base md:text-lg leading-relaxed max-w-lg font-body">
              {artist.bio}
            </p>
            <a
              href="/#final-cta"
              className="mt-10 inline-flex items-center gap-3 bg-olive hover:bg-olive-hover text-cream px-7 py-4 text-xs tracking-[0.28em] uppercase font-medium transition-all"
              data-testid="artist-book-btn"
            >
              Book with {artist.name.split(" ")[0]}
            </a>
          </div>
        </div>

        <div className="mb-10">
          <div className="text-[10px] tracking-[0.34em] uppercase text-olive font-semibold mb-3">
            · Portfolio
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-cream">
            Selected pieces
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {artist.portfolio.map((src, i) => (
            <button
              key={src + i}
              onClick={() => setActive(i)}
              className="group relative aspect-square overflow-hidden border border-olive/20 hover:border-olive/80 transition-colors"
              data-testid={`artist-portfolio-${i}`}
            >
              <img src={src} alt={`${artist.name} work ${i + 1}`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div className="fixed inset-0 z-50 bg-ink/95 backdrop-blur-xl flex items-center justify-center p-4" onClick={close} data-testid="artist-lightbox">
          <button onClick={close} className="absolute top-5 right-5 text-cream/70 hover:text-cream" aria-label="Close">
            <X size={28} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-5 md:left-10 text-cream/60 hover:text-cream p-3 border border-olive/30 hover:border-olive" aria-label="Previous">
            <ChevronLeft size={20} />
          </button>
          <img src={artist.portfolio[active]} alt="Piece" onClick={(e) => e.stopPropagation()} className="max-h-[85vh] max-w-[90vw] object-contain border border-olive/30" />
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-5 md:right-10 text-cream/60 hover:text-cream p-3 border border-olive/30 hover:border-olive" aria-label="Next">
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
}
