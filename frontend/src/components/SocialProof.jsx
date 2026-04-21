import { Star, ShieldCheck } from "lucide-react";
import { STUDIO } from "@/lib/studio";

export default function SocialProof() {
  return (
    <section className="px-5 md:px-8 py-10" data-testid="social-proof-section">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-stretch gap-4 md:gap-6">
        <div className="flex-1 flex items-center gap-4 border border-olive/30 bg-ink/60 px-6 py-5" data-testid="badge-rating">
          <div className="h-11 w-11 border border-olive/50 flex items-center justify-center shrink-0">
            <Star size={18} className="text-olive" fill="#556B2F" />
          </div>
          <div>
            <div className="font-display text-2xl font-semibold text-cream leading-none">
              {STUDIO.rating.toFixed(1)}<span className="text-olive text-lg">★</span>
            </div>
            <div className="text-[10px] tracking-[0.24em] uppercase text-cream/60 mt-1">
              Rated on Google · 600+ reviews
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center gap-4 border border-olive/30 bg-ink/60 px-6 py-5" data-testid="badge-hygiene">
          <div className="h-11 w-11 border border-olive/50 flex items-center justify-center shrink-0">
            <ShieldCheck size={18} className="text-olive" strokeWidth={1.8} />
          </div>
          <div>
            <div className="font-display text-2xl font-semibold text-cream leading-none">
              Hygiene Certified
            </div>
            <div className="text-[10px] tracking-[0.24em] uppercase text-cream/60 mt-1">
              Hospital-grade sterilization
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center gap-4 border border-olive/30 bg-ink/60 px-6 py-5" data-testid="badge-clients">
          <div className="h-11 w-11 border border-olive/50 flex items-center justify-center shrink-0">
            <span className="font-display text-olive text-lg">∞</span>
          </div>
          <div>
            <div className="font-display text-2xl font-semibold text-cream leading-none">
              {STUDIO.clients.toLocaleString()}+
            </div>
            <div className="text-[10px] tracking-[0.24em] uppercase text-cream/60 mt-1">
              Clients inked with care
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
