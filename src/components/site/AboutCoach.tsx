import coachImg from "@/assets/coach.jpg";
import { CheckCircle2 } from "lucide-react";
import { WHATSAPP } from "./Header";

const pillars = [
  "Disciplina como base de qualquer resultado",
  "Lifestyle de alta performance",
  "Comprometimento real com cada aluno",
  "Mindset profissional e estratégico",
];

export function AboutCoach() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-card/30 border-y border-border/40">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full" />
          <img
            src={coachImg}
            alt="Personal Leonardo, personal trainer especializado"
            loading="lazy"
            width={1024}
            height={1024}
            className="relative rounded-2xl border border-border w-full"
          />
        </div>
        <div>
          <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">Sobre o Personal</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            Personal Leonardo. <br /><span className="text-gradient-accent">Personal Trainer.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Mais do que treinos: um sistema completo de transformação física e mental. Cada plano é construído com estratégia, ciência e foco em resultado.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Minha missão é tirar você do estagnado e levar sua versão mais forte, disciplinada e confiante para a realidade.
          </p>
          <ul className="space-y-3 mb-10">
            {pillars.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground">{p}</span>
              </li>
            ))}
          </ul>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-wider text-sm hover:scale-105 transition-transform glow-accent"
          >
            Treinar com Leonardo
          </a>
        </div>
      </div>
    </section>
  );
}
