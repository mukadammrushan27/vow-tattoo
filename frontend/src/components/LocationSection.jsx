import { STUDIO } from "@/lib/studio";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function LocationSection() {
  return (
    <section id="contact" className="relative py-24 md:py-32 px-5 md:px-8" data-testid="location-section">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-5">
          <div className="text-[10px] tracking-[0.34em] uppercase text-olive font-semibold mb-4">
            · Visit the atelier
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-cream leading-[1]">
            Come sit with us.
          </h2>
          <p className="mt-5 text-cream/65 text-sm md:text-base font-body leading-relaxed max-w-md">
            Walk-ins welcome Thursday through Sunday. For custom pieces, please book a consultation first.
          </p>

          <ul className="mt-10 space-y-5">
            <li className="flex items-start gap-4" data-testid="contact-address">
              <MapPin size={18} className="text-olive mt-0.5" strokeWidth={1.5} />
              <div>
                <div className="text-[10px] tracking-[0.24em] uppercase text-cream/50 mb-1">Address</div>
                <div className="text-cream text-sm">{STUDIO.address}</div>
              </div>
            </li>
            <li className="flex items-start gap-4" data-testid="contact-phone">
              <Phone size={18} className="text-olive mt-0.5" strokeWidth={1.5} />
              <div>
                <div className="text-[10px] tracking-[0.24em] uppercase text-cream/50 mb-1">Phone</div>
                <a href={`tel:${STUDIO.phone}`} className="text-cream text-sm hover:text-olive">
                  {STUDIO.phone}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4" data-testid="contact-email">
              <Mail size={18} className="text-olive mt-0.5" strokeWidth={1.5} />
              <div>
                <div className="text-[10px] tracking-[0.24em] uppercase text-cream/50 mb-1">Email</div>
                <a href={`mailto:${STUDIO.email}`} className="text-cream text-sm hover:text-olive">
                  {STUDIO.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4" data-testid="contact-hours">
              <Clock size={18} className="text-olive mt-0.5" strokeWidth={1.5} />
              <div>
                <div className="text-[10px] tracking-[0.24em] uppercase text-cream/50 mb-1">Hours</div>
                <div className="text-cream text-sm">Tue – Sun · 12pm – 9pm</div>
                <div className="text-cream/60 text-xs mt-0.5">Closed Monday</div>
              </div>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-7 min-h-[420px] border border-olive/30 overflow-hidden relative">
          <iframe
            title="Studio location"
            src={STUDIO.mapEmbed}
            className="absolute inset-0 h-full w-full grayscale contrast-125"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            data-testid="google-map-embed"
          />
          <div className="absolute inset-0 pointer-events-none bg-olive/5 mix-blend-multiply" />
        </div>
      </div>
    </section>
  );
}
