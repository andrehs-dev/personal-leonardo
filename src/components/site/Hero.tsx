import { ArrowRight, MessageCircle, Trophy, Users, Target, Calendar } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { WHATSAPP } from "./Header";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Personal Leonardo em treino de alta performance"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-background/40" />

      <div className="container relative mx-auto px-6 pt-32 pb-20 z-10">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Personal Leonardo
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6">
            Treine com estratégia. <br />
            <span className="text-gradient-accent">Evolua com propósito.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Consultoria online e presencial focada em <strong className="text-foreground">resultados reais</strong>: emagrecimento, hipertrofia e performance com método personalizado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-wider text-sm hover:scale-105 transition-all glow-accent"
            >
              Começar Minha Evolução
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-foreground/20 text-foreground font-bold uppercase tracking-wider text-sm hover:border-primary hover:text-primary transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Falar no WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Users, label: "+100 alunos transformados" },
              { icon: Trophy, label: "Resultados reais" },
              { icon: Target, label: "Consultoria online" },
              { icon: Calendar, label: "Acompanhamento diário" },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-xs text-muted-foreground">
                <b.icon className="w-4 h-4 text-primary shrink-0" />
                <span>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}
