import { ArrowRight } from "lucide-react";
import gym from "@/assets/gym-atmosphere.jpg";
import { WHATSAPP } from "./Header";

export function CtaBanner() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <img src={gym} alt="" aria-hidden loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/85" />
      <div className="container relative mx-auto px-6 text-center max-w-3xl">
        <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">Sua decisão</span>
        <h2 className="text-5xl md:text-7xl font-bold mt-4 mb-6 leading-[0.95]">
          Pronto para <span className="text-gradient-accent">mudar seu físico?</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-10">
          Seu resultado depende da sua decisão. Comece sua transformação hoje.
        </p>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-10 py-5 rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-wider hover:scale-105 transition-transform glow-accent"
        >
          Quero Começar Agora
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
