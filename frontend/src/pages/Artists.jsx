import { Link } from "react-router-dom";
import { artists } from "@/lib/studio";
import { ArrowUpRight } from "lucide-react";

export default function Artists() {
  return (
    <div className="pt-28 md:pt-32 pb-24 px-5 md:px-8" data-testid="artists-page">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 md:mb-20 max-w-3xl">
          <div className="text-[10px] tracking-[0.34em] uppercase text-olive font-semibold mb-5">
            · The residents
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-cream leading-[0.95]">
            Six hands.
            <br />
            <span className="italic font-light">One standard.</span>
          </h1>
          <p className="mt-6 text-cream/65 text-sm md:text-base font-body leading-relaxed">
            Every artist at Noir Ink passes a rigorous residency. Browse their portfolios and request the one whose line feels closest to your idea.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {artists.map((a) => (
            <Link
              key={a.slug}
              to={`/artists/${a.slug}`}
              className="group relative border border-olive/30 hover:border-olive bg-ink/60 overflow-hidden transition-colors"
              data-testid={`artist-card-${a.slug}`}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={a.image}
                  alt={a.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 md:p-7 flex items-start justify-between gap-4">
                <div>
                  <div className="text-[10px] tracking-[0.24em] uppercase text-olive mb-2">
                    {a.specialty}
                  </div>
                  <div className="font-display text-2xl text-cream font-medium tracking-tight">
                    {a.name}
                  </div>
                </div>
                <div className="h-10 w-10 border border-olive/40 group-hover:border-olive group-hover:bg-olive/10 flex items-center justify-center shrink-0 transition-all">
                  <ArrowUpRight size={15} className="text-cream transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.6} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
