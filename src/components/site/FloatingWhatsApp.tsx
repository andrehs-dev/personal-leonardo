import { MessageCircle } from "lucide-react";
import { WHATSAPP } from "./Header";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[var(--whatsapp)] text-black animate-pulse-glow hover:scale-110 transition-transform"
    >
      <MessageCircle className="w-7 h-7" strokeWidth={2.5} />
    </a>
  );
}
