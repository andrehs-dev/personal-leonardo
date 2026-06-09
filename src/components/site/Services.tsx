import { Activity, Dumbbell, Flame, HeartPulse, LineChart, Users, Salad, Trophy, MapPin } from "lucide-react";

const services = [
  { icon: Activity, title: "Consultoria Online", desc: "Treino personalizado com suporte diário em qualquer lugar do mundo." },
  { icon: MapPin, title: "Personal Presencial", desc: "Acompanhamento 1-a-1 com correção técnica em tempo real." },
  { icon: Flame, title: "Emagrecimento", desc: "Protocolo estratégico de queima de gordura com resultados sustentáveis." },
  { icon: Dumbbell, title: "Hipertrofia", desc: "Programa de ganho de massa magra com periodização avançada." },
  { icon: LineChart, title: "Treino Personalizado", desc: "Plano construído sob medida para sua rotina, biotipo e objetivos." },
  { icon: Users, title: "Acompanhamento Diário", desc: "Check-ins, ajustes e suporte direto comigo no seu dia a dia." },
  { icon: HeartPulse, title: "Avaliação Física", desc: "Análise completa: bioimpedância, dobras, performance e mobilidade." },
  { icon: Salad, title: "Planejamento Alimentar", desc: "Estratégia nutricional integrada ao treino para acelerar resultados." },
  { icon: Trophy, title: "Performance Training", desc: "Protocolos para atletas, esportes e alto rendimento." },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-card/30 border-y border-border/40">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">Serviços</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            Tudo o que você precisa para <span className="text-gradient-accent">evoluir</span>.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative p-8 rounded-2xl bg-background border border-border hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
