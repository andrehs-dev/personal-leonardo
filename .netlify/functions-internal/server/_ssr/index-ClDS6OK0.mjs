import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { D as Dumbbell, X, M as Menu, A as ArrowRight, a as MessageCircle, U as Users, T as Trophy, b as Target, C as Calendar, c as Activity, d as MapPin, F as Flame, e as ChartLine, H as HeartPulse, S as Salad, f as CircleCheck, g as Star, I as Instagram, P as Play, h as Clock, i as Mail } from "../_libs/lucide-react.mjs";
const links = [
  { href: "#transformacoes", label: "Transformações" },
  { href: "#servicos", label: "Serviços" },
  { href: "#metodo", label: "Método" },
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" }
];
const WHATSAPP = "https://wa.me/5500000000000?text=Quero%20come%C3%A7ar%20minha%20evolu%C3%A7%C3%A3o%20com%20o%20Personal%20Leonardo";
function Header() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto flex items-center justify-between px-6 h-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-center gap-2 font-display font-bold tracking-wider", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Dumbbell, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm md:text-base", children: [
          "PERSONAL ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "/" }),
          " LEONARDO"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-8 text-sm font-medium text-muted-foreground", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: l.href, className: "hover:text-primary transition-colors uppercase tracking-wider text-xs", children: l.label }, l.href)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: WHATSAPP,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "hidden lg:inline-flex items-center px-5 py-2 rounded-full bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wider hover:scale-105 transition-transform",
          children: "Começar Agora"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "lg:hidden text-foreground",
          onClick: () => setOpen(!open),
          "aria-label": "Menu",
          children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, {})
        }
      )
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex flex-col px-6 py-4 gap-3", children: [
      links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: l.href,
          onClick: () => setOpen(false),
          className: "text-sm uppercase tracking-wider py-1 text-muted-foreground hover:text-primary",
          children: l.label
        },
        l.href
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: WHATSAPP,
          className: "mt-2 inline-flex justify-center items-center px-5 py-3 rounded-full bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wider",
          children: "Começar Agora"
        }
      )
    ] }) })
  ] });
}
const hero = "/assets/hero-BhCypTN0.jpg";
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative min-h-screen flex items-center overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: hero,
        alt: "Personal Leonardo em treino de alta performance",
        width: 1920,
        height: 1080,
        className: "absolute inset-0 w-full h-full object-cover object-center"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: { background: "var(--gradient-hero)" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container relative mx-auto px-6 pt-32 pb-20 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl animate-fade-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-primary animate-pulse" }),
        "Personal Leonardo"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6", children: [
        "Treine com estratégia. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-accent", children: "Evolua com propósito." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed", children: [
        "Consultoria online e presencial focada em ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "resultados reais" }),
        ": emagrecimento, hipertrofia e performance com método personalizado."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: WHATSAPP,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-wider text-sm hover:scale-105 transition-all glow-accent",
            children: [
              "Começar Minha Evolução",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: WHATSAPP,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-foreground/20 text-foreground font-bold uppercase tracking-wider text-sm hover:border-primary hover:text-primary transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
              "Falar no WhatsApp"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
        { icon: Users, label: "+100 alunos transformados" },
        { icon: Trophy, label: "Resultados reais" },
        { icon: Target, label: "Consultoria online" },
        { icon: Calendar, label: "Acompanhamento diário" }
      ].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(b.icon, { className: "w-4 h-4 text-primary shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: b.label })
      ] }, b.label)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-background" })
  ] });
}
const stats = [
  { value: "+100", label: "Alunos Transformados" },
  { value: "+5", label: "Anos de Experiência" },
  { value: "98%", label: "Taxa de Resultado" },
  { value: "24/7", label: "Acompanhamento" }
];
function StatsMarquee() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border/40 bg-card/30 py-8 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl md:text-5xl font-display font-bold text-gradient-accent", children: s.value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mt-2", children: s.label })
  ] }, s.label)) }) });
}
const t1 = "/assets/transformation1-C1cZnxY1.jpg";
const t2 = "/assets/transformation2-B-aR1PE1.jpg";
const t3 = "/assets/transformation3-DnmC2B0v.jpg";
const items = [
  { img: t1, name: "Rafael, 28", goal: "Recomposição Corporal", time: "6 meses", loss: "-12kg de gordura" },
  { img: t2, name: "Camila, 31", goal: "Emagrecimento & Tonificação", time: "5 meses", loss: "-9kg | +definição" },
  { img: t3, name: "Marcos, 34", goal: "Hipertrofia Avançada", time: "8 meses", loss: "+7kg de massa magra" }
];
function Transformations() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "transformacoes", className: "py-24 md:py-32 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary text-xs font-bold uppercase tracking-[0.3em]", children: "Transformações Reais" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-6xl font-bold mt-4", children: [
        "Físicos que ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-accent", children: "mudaram" }),
        " de verdade."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-4 text-lg", children: "Disciplina + método + acompanhamento. A fórmula por trás de cada transformação." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: it.img,
          alt: `Transformação de ${it.name}`,
          loading: "lazy",
          width: 1024,
          height: 1024,
          className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-background via-background/95 to-transparent", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-xs font-bold uppercase tracking-widest mb-1", children: it.goal }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-display font-bold", children: it.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-2 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: it.time }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-semibold", children: it.loss })
        ] })
      ] })
    ] }, it.name)) })
  ] }) });
}
const services = [
  { icon: Activity, title: "Consultoria Online", desc: "Treino personalizado com suporte diário em qualquer lugar do mundo." },
  { icon: MapPin, title: "Personal Presencial", desc: "Acompanhamento 1-a-1 com correção técnica em tempo real." },
  { icon: Flame, title: "Emagrecimento", desc: "Protocolo estratégico de queima de gordura com resultados sustentáveis." },
  { icon: Dumbbell, title: "Hipertrofia", desc: "Programa de ganho de massa magra com periodização avançada." },
  { icon: ChartLine, title: "Treino Personalizado", desc: "Plano construído sob medida para sua rotina, biotipo e objetivos." },
  { icon: Users, title: "Acompanhamento Diário", desc: "Check-ins, ajustes e suporte direto comigo no seu dia a dia." },
  { icon: HeartPulse, title: "Avaliação Física", desc: "Análise completa: bioimpedância, dobras, performance e mobilidade." },
  { icon: Salad, title: "Planejamento Alimentar", desc: "Estratégia nutricional integrada ao treino para acelerar resultados." },
  { icon: Trophy, title: "Performance Training", desc: "Protocolos para atletas, esportes e alto rendimento." }
];
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "servicos", className: "py-24 md:py-32 bg-card/30 border-y border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary text-xs font-bold uppercase tracking-[0.3em]", children: "Serviços" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-6xl font-bold mt-4", children: [
        "Tudo o que você precisa para ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-accent", children: "evoluir" }),
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "group relative p-8 rounded-2xl bg-background border border-border hover:border-primary/50 hover:-translate-y-1 transition-all duration-300",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "w-5 h-5 text-primary group-hover:text-primary-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-display font-bold mb-2", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: s.desc })
        ]
      },
      s.title
    )) })
  ] }) });
}
const steps = [
  { n: "01", title: "Avaliação do Aluno", desc: "Anamnese completa, análise corporal, histórico e definição de objetivos claros." },
  { n: "02", title: "Estratégia Personalizada", desc: "Construção do plano de treino + protocolo nutricional alinhado à sua rotina." },
  { n: "03", title: "Acompanhamento Contínuo", desc: "Suporte direto comigo, ajustes semanais e correção de execução técnica." },
  { n: "04", title: "Evolução Real", desc: "Métricas, fotos e performance acompanhadas para garantir transformação consistente." }
];
function Method() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "metodo", className: "py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary text-xs font-bold uppercase tracking-[0.3em]", children: "Método" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-6xl font-bold mt-4", children: [
        "Como funciona a ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-accent", children: "evolução" }),
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-8 rounded-2xl bg-card border border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl font-display font-bold text-primary/20 mb-4", children: s.n }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-display font-bold mb-3", children: s.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: s.desc }),
      i < steps.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block absolute top-12 -right-3 w-6 h-px bg-gradient-to-r from-primary to-transparent" })
    ] }, s.n)) })
  ] }) });
}
const coach = "/assets/coach-C0WyZoH7.jpg";
const pillars = [
  "Disciplina como base de qualquer resultado",
  "Lifestyle de alta performance",
  "Comprometimento real com cada aluno",
  "Mindset profissional e estratégico"
];
function AboutCoach() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "sobre", className: "py-24 md:py-32 bg-card/30 border-y border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 bg-primary/20 blur-3xl rounded-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: coach,
          alt: "Personal Leonardo, personal trainer especializado",
          loading: "lazy",
          width: 1024,
          height: 1024,
          className: "relative rounded-2xl border border-border w-full"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary text-xs font-bold uppercase tracking-[0.3em]", children: "Sobre o Personal" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-6xl font-bold mt-4 mb-6", children: [
        "Personal Leonardo. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-accent", children: "Personal Trainer." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg leading-relaxed mb-4", children: "Mais do que treinos: um sistema completo de transformação física e mental. Cada plano é construído com estratégia, ciência e foco em resultado." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-8", children: "Minha missão é tirar você do estagnado e levar sua versão mais forte, disciplinada e confiante para a realidade." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 mb-10", children: pillars.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-primary mt-0.5 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: p })
      ] }, p)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: WHATSAPP,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-wider text-sm hover:scale-105 transition-transform glow-accent",
          children: "Treinar com Leonardo"
        }
      )
    ] })
  ] }) });
}
const testimonials = [
  {
    name: "Pedro H.",
    result: "-14kg em 7 meses",
    text: "Eu já tinha tentado de tudo. Com a metodologia do Leonardo finalmente entendi que faltava estratégia e disciplina. Mudei meu corpo e minha cabeça."
  },
  {
    name: "Juliana S.",
    result: "Reconquistou autoestima",
    text: "Não foi só o físico que mudou. Hoje me olho no espelho com orgulho. O acompanhamento dele é diferente, sente que ele se importa de verdade."
  },
  {
    name: "Lucas M.",
    result: "+8kg de massa magra",
    text: "Treino há anos mas nunca tinha visto evolução tão rápida. O método é cirúrgico e o suporte diário faz toda a diferença."
  },
  {
    name: "Amanda R.",
    result: "Definição e performance",
    text: "Saí da zona de conforto. O Leonardo me mostrou que disciplina é liberdade. Minha rotina mudou e meus resultados também."
  }
];
function Testimonials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "depoimentos", className: "py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary text-xs font-bold uppercase tracking-[0.3em]", children: "Depoimentos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-6xl font-bold mt-4", children: [
        "Quem treina, ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-accent", children: "transforma" }),
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6", children: testimonials.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mb-4", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 fill-primary text-primary" }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "text-lg text-foreground leading-relaxed mb-6", children: [
        '"',
        t.text,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "flex items-center justify-between border-t border-border pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold uppercase tracking-wider text-sm", children: t.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-xs font-bold uppercase tracking-widest", children: t.result })
      ] })
    ] }, t.name)) })
  ] }) });
}
const gym = "/assets/gym-atmosphere-79_FR9fs.jpg";
const reels = [
  { img: hero, label: "Treino de força" },
  { img: t1, label: "Transformação real" },
  { img: gym, label: "Bastidores" },
  { img: coach, label: "Mindset" },
  { img: t2, label: "Recomposição" },
  { img: t3, label: "Hipertrofia" }
];
function Social() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32 bg-card/30 border-y border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary text-xs font-bold uppercase tracking-[0.3em]", children: "Conteúdo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-6xl font-bold mt-4", children: [
          "Acompanhe no ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-accent", children: "Instagram" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://www.instagram.com/personalleonardo/",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/40 text-primary font-bold uppercase tracking-wider text-xs hover:bg-primary hover:text-primary-foreground transition-colors w-fit",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "w-4 h-4" }),
            " @personalleonardo"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3", children: reels.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: "https://www.instagram.com/personalleonardo/",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "group relative aspect-[9/16] rounded-xl overflow-hidden bg-background border border-border",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: r.img, alt: r.label, loading: "lazy", className: "absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-5 h-5 fill-current" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 left-3 right-3 text-xs font-bold uppercase tracking-wider", children: r.label })
        ]
      },
      i
    )) })
  ] }) });
}
function CtaBanner() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 md:py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: gym, alt: "", "aria-hidden": true, loading: "lazy", className: "absolute inset-0 w-full h-full object-cover" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/85" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container relative mx-auto px-6 text-center max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary text-xs font-bold uppercase tracking-[0.3em]", children: "Sua decisão" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-5xl md:text-7xl font-bold mt-4 mb-6 leading-[0.95]", children: [
        "Pronto para ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-accent", children: "mudar seu físico?" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg md:text-xl text-muted-foreground mb-10", children: "Seu resultado depende da sua decisão. Comece sua transformação hoje." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: WHATSAPP,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "group inline-flex items-center gap-2 px-10 py-5 rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-wider hover:scale-105 transition-transform glow-accent",
          children: [
            "Quero Começar Agora",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform" })
          ]
        }
      )
    ] })
  ] });
}
function Contact() {
  const [sent, setSent] = reactExports.useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const msg = `Olá Leonardo! Sou ${data.get("name")}. Objetivo: ${data.get("goal")}. ${data.get("message") ?? ""}`;
    window.open(`${WHATSAPP.split("?")[0]}?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contato", className: "py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 grid lg:grid-cols-2 gap-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary text-xs font-bold uppercase tracking-[0.3em]", children: "Contato" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-6xl font-bold mt-4 mb-6", children: [
        "Vamos conversar sobre sua ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-accent", children: "evolução" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg mb-10", children: "Aplique para a consultoria online ou agende uma avaliação presencial." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: WHATSAPP, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-4 group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-5 h-5 text-primary group-hover:text-primary-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "WhatsApp" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: "Falar com Leonardo" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.instagram.com/personalleonardo/", target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-4 group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "w-5 h-5 text-primary group-hover:text-primary-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Instagram" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: "@personalleonardo" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-5 h-5 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Atendimento" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: "Seg a Sáb · 06h às 22h" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-5 h-5 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "E-mail" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: "contato@personalleonardo.com" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "p-8 rounded-2xl bg-card border border-border space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-display font-bold", children: "Fale com Leonardo" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", htmlFor: "name", children: "Nome" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "name", name: "name", required: true, className: "mt-2 w-full bg-background border border-border rounded-lg px-4 py-3 focus:border-primary outline-none transition-colors", placeholder: "Seu nome" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", htmlFor: "goal", children: "Objetivo principal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: "goal", name: "goal", required: true, className: "mt-2 w-full bg-background border border-border rounded-lg px-4 py-3 focus:border-primary outline-none transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Emagrecimento" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Hipertrofia" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Performance" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Recomposição corporal" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", htmlFor: "message", children: "Mensagem" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id: "message", name: "message", rows: 4, className: "mt-2 w-full bg-background border border-border rounded-lg px-4 py-3 focus:border-primary outline-none transition-colors resize-none", placeholder: "Me conte um pouco sobre você..." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full py-4 rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-wider text-sm hover:scale-[1.02] transition-transform glow-accent", children: sent ? "Abrindo WhatsApp..." : "Enviar Aplicação" })
    ] })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border bg-background py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-8 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-display font-bold mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Dumbbell, { className: "w-5 h-5 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "PERSONAL ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "/" }),
            " LEONARDO"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "Transforme seu corpo e sua mentalidade com treino personalizado de verdade." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mb-4", children: "Navegação" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#servicos", className: "hover:text-primary", children: "Serviços" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#metodo", className: "hover:text-primary", children: "Método" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#sobre", className: "hover:text-primary", children: "Sobre" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#depoimentos", className: "hover:text-primary", children: "Depoimentos" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contato", className: "hover:text-primary", children: "Contato" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mb-4", children: "Conecte-se" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.instagram.com/personalleonardo/", target: "_blank", rel: "noopener noreferrer", "aria-label": "Instagram", className: "w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/5500000000000", target: "_blank", rel: "noopener noreferrer", "aria-label": "WhatsApp", className: "w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-2 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Personal Leonardo. Todos os direitos reservados."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Treino que transforma." })
    ] })
  ] }) });
}
function FloatingWhatsApp() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      href: WHATSAPP,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Falar no WhatsApp",
      className: "fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[var(--whatsapp)] text-black animate-pulse-glow hover:scale-110 transition-transform",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-7 h-7", strokeWidth: 2.5 })
    }
  );
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatsMarquee, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Transformations, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Method, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AboutCoach, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Social, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CtaBanner, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingWhatsApp, {})
  ] });
}
export {
  Index as component
};
