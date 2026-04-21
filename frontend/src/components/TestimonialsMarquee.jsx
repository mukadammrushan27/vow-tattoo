import { testimonials, gallery, STUDIO } from "@/lib/studio";
import { Instagram, Quote } from "lucide-react";

export default function TestimonialsMarquee() {
  const loopQuotes = [...testimonials, ...testimonials];
  const loopImages = [...gallery, ...gallery];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-5 md:px-8 mb-12 md:mb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="text-[10px] tracking-[0.34em] uppercase text-olive font-semibold mb-4">
              · Said about us
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-cream leading-[1]">
              Voices from
              <br />
              <span className="italic font-light">the chair.</span>
            </h2>
          </div>
          <a
            href={`https://instagram.com/${STUDIO.instagram.replace("@", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-cream/80 hover:text-cream text-xs tracking-[0.22em] uppercase"
            data-testid="instagram-link"
          >
            <Instagram size={16} strokeWidth={1.6} />
            {STUDIO.instagram}
          </a>
        </div>
      </div>

      {/* Outline kinetic text */}
      <div className="marquee-wrapper overflow-hidden mb-10 border-y border-olive/20 py-8">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, n) => (
            <div key={n} className="flex items-center gap-12 pr-12">
              {["Fine Line", "Blackwork", "Neo-Traditional", "Piercings", "Custom Designs", "Cover-Ups"].map((w) => (
                <span key={w + n} className="font-display text-outline text-6xl md:text-8xl font-semibold tracking-tighter whitespace-nowrap">
                  {w} ·
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials marquee */}
      <div className="marquee-wrapper overflow-hidden mb-10">
        <div className="marquee-track gap-4">
          {loopQuotes.map((t, i) => (
            <figure
              key={i}
              className="shrink-0 w-[320px] md:w-[420px] border border-olive/30 bg-ink/70 p-7"
              data-testid={`testimonial-${i % testimonials.length}`}
            >
              <Quote size={20} className="text-olive mb-4" strokeWidth={1.4} />
              <blockquote className="text-cream/85 text-sm md:text-base leading-relaxed font-body mb-5">
                “{t.quote}”
              </blockquote>
              <figcaption className="flex items-center justify-between text-[11px] tracking-[0.22em] uppercase">
                <span className="text-cream">{t.name}</span>
                <span className="text-olive">{t.piece}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Instagram images marquee (reverse) */}
      <div className="marquee-wrapper overflow-hidden">
        <div className="marquee-track reverse gap-3">
          {loopImages.map((src, i) => (
            <a
              key={src + i}
              href={`https://instagram.com/${STUDIO.instagram.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 w-48 md:w-64 aspect-square border border-olive/20 overflow-hidden group relative"
              data-testid={`insta-tile-${i}`}
            >
              <img src={src} alt="Instagram feed" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors flex items-center justify-center">
                <Instagram size={24} className="text-cream opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={1.4} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
