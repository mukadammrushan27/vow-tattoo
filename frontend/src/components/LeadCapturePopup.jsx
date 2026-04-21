import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { X } from "lucide-react";
import { toast } from "sonner";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const DISMISSED_KEY = "noir_lead_dismissed";
const SUBMITTED_KEY = "noir_lead_submitted";

export default function LeadCapturePopup() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ first_name: "", last_name: "", phone: "" });
  const [loading, setLoading] = useState(false);

  const shouldSkip = useCallback(() => {
    return localStorage.getItem(SUBMITTED_KEY) === "1";
  }, []);

  useEffect(() => {
    if (shouldSkip()) return;

    const firstTimer = setTimeout(() => setOpen(true), 7000);

    const recurring = setInterval(() => {
      if (shouldSkip()) return;
      setOpen((prev) => (prev ? prev : true));
    }, 30000);

    return () => {
      clearTimeout(firstTimer);
      clearInterval(recurring);
    };
  }, [shouldSkip]);

  const close = () => {
    setOpen(false);
    sessionStorage.setItem(DISMISSED_KEY, Date.now().toString());
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!form.first_name.trim() || !form.phone.trim()) {
      toast.error("Please enter your name and phone.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/leads`, { ...form, source: "popup" });
      localStorage.setItem(SUBMITTED_KEY, "1");
      toast.success("Offer claimed. We’ll reach out within 24 hours.");
      setOpen(false);
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      data-testid="lead-capture-popup"
    >
      <div className="relative w-full max-w-lg bg-ink/90 backdrop-blur-2xl border border-olive/40 p-8 md:p-10 rise">
        <button
          onClick={close}
          className="absolute top-4 right-4 text-cream/60 hover:text-cream transition-colors"
          aria-label="Close"
          data-testid="lead-popup-close-btn"
        >
          <X size={20} />
        </button>

        <div className="text-[10px] tracking-[0.3em] uppercase text-olive font-semibold mb-4">
          Limited · First-Time Clients
        </div>
        <h3 className="font-display text-3xl md:text-4xl font-semibold text-cream leading-[1.1] mb-3">
          Get <span className="text-olive">20% Off</span> Your First Tattoo
        </h3>
        <p className="text-cream/70 text-sm mb-7 font-body">
          Book a free consultation with one of our resident artists. No pressure, no fluff — just a conversation about your idea.
        </p>

        <form onSubmit={submit} className="space-y-3" data-testid="lead-popup-form">
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="First name"
              value={form.first_name}
              onChange={(e) => setForm({ ...form, first_name: e.target.value })}
              className="bg-transparent border border-olive/30 focus:border-olive outline-none px-4 py-3 text-cream placeholder:text-cream/40 text-sm"
              required
              data-testid="lead-popup-first-name"
            />
            <input
              type="text"
              placeholder="Last name"
              value={form.last_name}
              onChange={(e) => setForm({ ...form, last_name: e.target.value })}
              className="bg-transparent border border-olive/30 focus:border-olive outline-none px-4 py-3 text-cream placeholder:text-cream/40 text-sm"
              data-testid="lead-popup-last-name"
            />
          </div>
          <input
            type="tel"
            placeholder="Phone number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full bg-transparent border border-olive/30 focus:border-olive outline-none px-4 py-3 text-cream placeholder:text-cream/40 text-sm"
            required
            data-testid="lead-popup-phone"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-olive hover:bg-olive-hover text-cream py-3.5 text-xs tracking-[0.28em] uppercase font-medium transition-all disabled:opacity-50"
            data-testid="lead-popup-submit"
          >
            {loading ? "Claiming…" : "Claim Offer"}
          </button>
          <p className="text-[10px] text-cream/40 tracking-wide text-center pt-1">
            By submitting, you agree to receive a single SMS follow-up.
          </p>
        </form>
      </div>
    </div>
  );
}
