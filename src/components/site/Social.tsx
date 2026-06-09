import { Instagram, Play } from "lucide-react";
import gym from "@/assets/gym-atmosphere.jpg";
import t1 from "@/assets/transformation1.jpg";
import t2 from "@/assets/transformation2.jpg";
import t3 from "@/assets/transformation3.jpg";
import hero from "@/assets/hero.jpg";
import coach from "@/assets/coach.jpg";

const reels = [
  { img: hero, label: "Treino de força" },
  { img: t1, label: "Transformação real" },
  { img: gym, label: "Bastidores" },
  { img: coach, label: "Mindset" },
  { img: t2, label: "Recomposição" },
  { img: t3, label: "Hipertrofia" },
];

export function Social() {
  return (
    <section className="py-24 md:py-32 bg-card/30 border-y border-border/40">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">Conteúdo</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4">
              Acompanhe no <span className="text-gradient-accent">Instagram</span>.
            </h2>
          </div>
          <a
            href="https://www.instagram.com/personalleonardo/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/40 text-primary font-bold uppercase tracking-wider text-xs hover:bg-primary hover:text-primary-foreground transition-colors w-fit"
          >
            <Instagram className="w-4 h-4" /> @personalleonardo
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {reels.map((r, i) => (
            <a
              key={i}
              href="https://www.instagram.com/personalleonardo/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[9/16] rounded-xl overflow-hidden bg-background border border-border"
            >
              <img src={r.img} alt={r.label} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                  <Play className="w-5 h-5 fill-current" />
                </div>
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-xs font-bold uppercase tracking-wider">
                {r.label}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
