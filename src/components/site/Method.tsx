const steps = [
  { n: "01", title: "Avaliação do Aluno", desc: "Anamnese completa, análise corporal, histórico e definição de objetivos claros." },
  { n: "02", title: "Estratégia Personalizada", desc: "Construção do plano de treino + protocolo nutricional alinhado à sua rotina." },
  { n: "03", title: "Acompanhamento Contínuo", desc: "Suporte direto comigo, ajustes semanais e correção de execução técnica." },
  { n: "04", title: "Evolução Real", desc: "Métricas, fotos e performance acompanhadas para garantir transformação consistente." },
];

export function Method() {
  return (
    <section id="metodo" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">Método</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            Como funciona a <span className="text-gradient-accent">evolução</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.n} className="relative p-8 rounded-2xl bg-card border border-border">
              <div className="text-6xl font-display font-bold text-primary/20 mb-4">{s.n}</div>
              <h3 className="text-xl font-display font-bold mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-3 w-6 h-px bg-gradient-to-r from-primary to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
