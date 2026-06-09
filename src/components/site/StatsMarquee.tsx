const stats = [
  { value: "+100", label: "Alunos Transformados" },
  { value: "+5", label: "Anos de Experiência" },
  { value: "98%", label: "Taxa de Resultado" },
  { value: "24/7", label: "Acompanhamento" },
];

export function StatsMarquee() {
  return (
    <section className="border-y border-border/40 bg-card/30 py-8 overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-4xl md:text-5xl font-display font-bold text-gradient-accent">{s.value}</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
