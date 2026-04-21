import { services } from "@/lib/studio";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 px-5 md:px-8" data-testid="services-section">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div>
            <div className="text-[10px] tracking-[0.34em] uppercase text-olive font-semibold mb-4">
              · What we do
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-cream leading-[1]">
              Two crafts.
              <br />
              <span className="italic font-light">One obsession.</span>
            </h2>
          </div>
          <p className="text-cream/60 max-w-sm text-sm leading-relaxed">
            Every visit begins with a real conversation — no pressure, no upselling. Only then do we pick up a needle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {services.map((s, i) => (
            <a
              key={s.key}
              href="#final-cta"
              className={`group relative overflow-hidden border border-olive/30 hover:border-olive bg-ink/60 transition-all ${
                i === 0 ? "md:col-span-7" : "md:col-span-5"
              }`}
              data-testid={`service-card-${s.key}`}
            >
              <div className="aspect-[4/3] md:aspect-[5/4] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-7 md:p-10">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-cream leading-tight">
                    {s.title}
                  </h3>
                  <div className="h-10 w-10 border border-olive/40 group-hover:border-olive group-hover:bg-olive/10 flex items-center justify-center shrink-0 transition-all">
                    <ArrowUpRight
                      size={16}
                      className="text-cream transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={1.6}
                    />
                  </div>
                </div>
                <p className="text-cream/65 text-sm leading-relaxed mb-6 max-w-lg">
                  {s.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.points.map((p) => (
                    <span
                      key={p}
                      className="text-[10px] tracking-[0.22em] uppercase text-olive border border-olive/30 px-3 py-1.5"
                    >
                      {p}
                    </span>
                  ))}
                </div>
                <div className="mt-8 text-[11px] tracking-[0.28em] uppercase text-cream/80 flex items-center gap-2">
                  Book Consultation
                  <span className="h-[1px] w-6 bg-olive group-hover:w-12 transition-all" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
