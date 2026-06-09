import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Pedro H.",
    result: "-14kg em 7 meses",
    text: "Eu já tinha tentado de tudo. Com a metodologia do Leonardo finalmente entendi que faltava estratégia e disciplina. Mudei meu corpo e minha cabeça.",
  },
  {
    name: "Juliana S.",
    result: "Reconquistou autoestima",
    text: "Não foi só o físico que mudou. Hoje me olho no espelho com orgulho. O acompanhamento dele é diferente, sente que ele se importa de verdade.",
  },
  {
    name: "Lucas M.",
    result: "+8kg de massa magra",
    text: "Treino há anos mas nunca tinha visto evolução tão rápida. O método é cirúrgico e o suporte diário faz toda a diferença.",
  },
  {
    name: "Amanda R.",
    result: "Definição e performance",
    text: "Saí da zona de conforto. O Leonardo me mostrou que disciplina é liberdade. Minha rotina mudou e meus resultados também.",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">Depoimentos</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            Quem treina, <span className="text-gradient-accent">transforma</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-colors">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-lg text-foreground leading-relaxed mb-6">
                "{t.text}"
              </blockquote>
              <figcaption className="flex items-center justify-between border-t border-border pt-4">
                <div className="font-display font-bold uppercase tracking-wider text-sm">{t.name}</div>
                <div className="text-primary text-xs font-bold uppercase tracking-widest">{t.result}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
