import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/studio";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[620px] w-full overflow-hidden" data-testid="hero-section">
      {heroSlides.map((s, i) => (
        <div
          key={s.url}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== idx}
        >
          <img
            src={s.url}
            alt={s.alt}
            className={`h-full w-full object-cover ${i === idx ? "hero-slide-active" : ""}`}
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-ink/90" />
      <div className="absolute inset-0 grain pointer-events-none" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-24 md:pb-32">
        <div className="rise max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-10 bg-olive" />
            <span className="text-[10px] md:text-xs tracking-[0.34em] uppercase text-olive font-semibold">
              Est. 2013 · Brooklyn
            </span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[0.95] tracking-tighter text-cream">
            Ink that tells
            <br />
            <span className="italic font-light text-olive">your</span> story.
          </h1>
          <p className="mt-6 text-cream/70 max-w-xl text-base md:text-lg font-body leading-relaxed">
            A quiet, sterile atelier for custom tattoos and precision piercings. Hand-drawn. Zero templates. Every line intentional.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#final-cta"
              className="group inline-flex items-center gap-3 bg-olive hover:bg-olive-hover text-cream px-7 py-4 text-xs tracking-[0.28em] uppercase font-medium transition-all"
              data-testid="hero-book-consultation-btn"
            >
              Book Free Consultation
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
                strokeWidth={1.6}
              />
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 text-cream/80 hover:text-cream text-xs tracking-[0.28em] uppercase transition-colors"
              data-testid="hero-view-work-link"
            >
              View Work
              <span className="h-[1px] w-8 bg-cream/40" />
            </a>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-10 right-5 md:right-8 flex items-center gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-[2px] transition-all ${
                i === idx ? "w-10 bg-olive" : "w-5 bg-cream/30 hover:bg-cream/60"
              }`}
              aria-label={`Go to slide ${i + 1}`}
              data-testid={`hero-slide-indicator-${i}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
