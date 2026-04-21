import { useState } from "react";
import { gallery } from "@/lib/studio";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const [active, setActive] = useState(null);

  const close = () => setActive(null);
  const next = () => setActive((i) => (i + 1) % gallery.length);
  const prev = () => setActive((i) => (i - 1 + gallery.length) % gallery.length);

  return (
    <section id="gallery" className="relative py-24 md:py-32 px-5 md:px-8" data-testid="gallery-section">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="text-[10px] tracking-[0.34em] uppercase text-olive font-semibold mb-4">
              · Our work
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-cream leading-[1]">
              Selected pieces,
              <br />
              <span className="italic font-light">fresh off the skin.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {gallery.map((src, i) => (
            <button
              key={src + i}
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden border border-olive/20 hover:border-olive/80 transition-colors ${
                i % 5 === 0 ? "row-span-2 aspect-[3/5]" : "aspect-square"
              }`}
              data-testid={`gallery-item-${i}`}
            >
              <img
                src={src}
                alt={`Tattoo work ${i + 1}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors" />
              <div className="absolute bottom-3 left-3 text-[10px] tracking-[0.2em] uppercase text-cream opacity-0 group-hover:opacity-100 transition-opacity">
                View
              </div>
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-50 bg-ink/95 backdrop-blur-xl flex items-center justify-center p-4"
          data-testid="gallery-lightbox"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute top-5 right-5 text-cream/70 hover:text-cream"
            aria-label="Close"
            data-testid="gallery-lightbox-close"
          >
            <X size={28} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-5 md:left-10 text-cream/60 hover:text-cream p-3 border border-olive/30 hover:border-olive"
            aria-label="Previous"
            data-testid="gallery-lightbox-prev"
          >
            <ChevronLeft size={20} />
          </button>
          <img
            src={gallery[active]}
            alt={`Piece ${active + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] object-contain border border-olive/30"
          />
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-5 md:right-10 text-cream/60 hover:text-cream p-3 border border-olive/30 hover:border-olive"
            aria-label="Next"
            data-testid="gallery-lightbox-next"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </section>
  );
}
