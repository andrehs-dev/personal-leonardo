import t1 from "@/assets/transformation1.jpg";
import t2 from "@/assets/transformation2.jpg";
import t3 from "@/assets/transformation3.jpg";

const items = [
  { img: t1, name: "Rafael, 28", goal: "Recomposição Corporal", time: "6 meses", loss: "-12kg de gordura" },
  { img: t2, name: "Camila, 31", goal: "Emagrecimento & Tonificação", time: "5 meses", loss: "-9kg | +definição" },
  { img: t3, name: "Marcos, 34", goal: "Hipertrofia Avançada", time: "8 meses", loss: "+7kg de massa magra" },
];

export function Transformations() {
  return (
    <section id="transformacoes" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">Transformações Reais</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            Físicos que <span className="text-gradient-accent">mudaram</span> de verdade.
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Disciplina + método + acompanhamento. A fórmula por trás de cada transformação.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <article key={it.name} className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={it.img}
                  alt={`Transformação de ${it.name}`}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-background via-background/95 to-transparent">
                <div className="text-primary text-xs font-bold uppercase tracking-widest mb-1">{it.goal}</div>
                <div className="text-xl font-display font-bold">{it.name}</div>
                <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                  <span>{it.time}</span>
                  <span className="text-primary font-semibold">{it.loss}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
