import { STUDIO } from "@/lib/studio";

const stats = [
  { label: "Years of craft", value: `${STUDIO.years}+` },
  { label: "Clients served", value: `${STUDIO.clients.toLocaleString()}+` },
  { label: "Resident artists", value: `${STUDIO.artists}` },
  { label: "Google rating", value: `${STUDIO.rating}★` },
];

export default function ExperienceStrip() {
  return (
    <section className="relative py-20 md:py-28 px-5 md:px-8 border-y border-olive/20 bg-[#0c0c0c]" data-testid="experience-section">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-x-12">
          {stats.map((s, i) => (
            <div key={s.label} className="relative pl-5 md:pl-6" data-testid={`stat-${i}`}>
              <span className="absolute left-0 top-2 h-[calc(100%-16px)] w-[1px] bg-olive/50" />
              <div className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-cream leading-none">
                {s.value}
              </div>
              <div className="mt-3 text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-cream/60">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
