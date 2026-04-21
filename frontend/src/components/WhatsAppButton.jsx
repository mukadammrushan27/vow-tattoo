import { MessageCircle } from "lucide-react";
import { STUDIO } from "@/lib/studio";

export default function WhatsAppButton() {
  const href = `https://wa.me/${STUDIO.whatsapp}?text=${encodeURIComponent(
    "Hey — I'd love to book a free consultation at " + STUDIO.name
  )}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      data-testid="whatsapp-chat-btn"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-olive/50 ping-ring" />
      <span className="relative flex items-center gap-2 bg-olive hover:bg-olive-hover text-cream pl-4 pr-5 py-3 rounded-full shadow-[0_8px_32px_rgba(85,107,47,0.35)] transition-all">
        <MessageCircle size={20} strokeWidth={1.6} />
        <span className="text-xs tracking-[0.2em] uppercase font-medium hidden sm:inline">
          Let’s Chat
        </span>
      </span>
    </a>
  );
}
