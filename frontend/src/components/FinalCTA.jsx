import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function FinalCTA() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    service: "Custom Tattoo",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.first_name.trim() || !form.phone.trim()) {
      toast.error("Please enter your name and phone.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/bookings`, form);
      setDone(true);
      toast.success("Booking received. We’ll confirm within 24 hours.");
    } catch {
      toast.error("Couldn’t submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="final-cta"
      className="relative py-24 md:py-36 px-5 md:px-8 overflow-hidden"
      data-testid="final-cta-section"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c] via-ink to-ink" />
      <div className="absolute inset-0 grain" />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-6">
          <div className="text-[10px] tracking-[0.34em] uppercase text-olive font-semibold mb-5">
            · Book your chair
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-cream leading-[0.95]">
            Free consultation,
            <br />
            <span className="italic font-light text-olive">20% off</span> your first piece.
          </h2>
          <p className="mt-6 text-cream/65 text-sm md:text-base font-body leading-relaxed max-w-lg">
            Tell us about the idea. We’ll reach out within 24 hours to schedule a one-on-one with the right artist.
          </p>

          <div className="mt-10 flex items-center gap-3 text-[11px] tracking-[0.24em] uppercase text-cream/60">
            <span className="h-[1px] w-10 bg-olive" />
            Offer valid for first-time clients only
          </div>
        </div>

        <div className="lg:col-span-6 border border-olive/40 bg-ink/80 backdrop-blur p-7 md:p-10">
          {done ? (
            <div className="py-10 text-center" data-testid="final-cta-success">
              <div className="font-display text-3xl text-cream mb-3">You’re on the list.</div>
              <p className="text-cream/70 text-sm">
                We’ll reach out from <span className="text-olive">+1 (555) 018-2247</span> within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4" data-testid="final-cta-form">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="First name"
                  value={form.first_name}
                  onChange={(e) => setForm({ ...form, first_name: e.target.value })}
                  className="bg-transparent border border-olive/30 focus:border-olive outline-none px-4 py-3.5 text-cream placeholder:text-cream/40 text-sm"
                  required
                  data-testid="final-cta-first-name"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  value={form.last_name}
                  onChange={(e) => setForm({ ...form, last_name: e.target.value })}
                  className="bg-transparent border border-olive/30 focus:border-olive outline-none px-4 py-3.5 text-cream placeholder:text-cream/40 text-sm"
                  data-testid="final-cta-last-name"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-transparent border border-olive/30 focus:border-olive outline-none px-4 py-3.5 text-cream placeholder:text-cream/40 text-sm"
                required
                data-testid="final-cta-phone"
              />
              <input
                type="email"
                placeholder="Email (optional)"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent border border-olive/30 focus:border-olive outline-none px-4 py-3.5 text-cream placeholder:text-cream/40 text-sm"
                data-testid="final-cta-email"
              />
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full bg-ink border border-olive/30 focus:border-olive outline-none px-4 py-3.5 text-cream text-sm"
                data-testid="final-cta-service"
              >
                <option>Custom Tattoo</option>
                <option>Piercing</option>
                <option>Cover-up</option>
                <option>Not sure yet</option>
              </select>
              <textarea
                placeholder="Tell us about your idea (optional)"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={3}
                className="w-full bg-transparent border border-olive/30 focus:border-olive outline-none px-4 py-3.5 text-cream placeholder:text-cream/40 text-sm resize-none"
                data-testid="final-cta-message"
              />
              <button
                type="submit"
                disabled={loading}
                className="group w-full inline-flex items-center justify-center gap-3 bg-olive hover:bg-olive-hover text-cream py-4 text-xs tracking-[0.28em] uppercase font-medium transition-all disabled:opacity-50"
                data-testid="final-cta-submit"
              >
                {loading ? "Sending…" : "Book Free Consultation"}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" strokeWidth={1.6} />
              </button>
              <p className="text-[10px] text-cream/40 tracking-wide text-center pt-1">
                Get 20% off when you book online.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
