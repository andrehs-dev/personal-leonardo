import { Clock, Instagram, Mail, MessageCircle } from "lucide-react";
import { useState, type FormEvent } from "react";
import { WHATSAPP } from "./Header";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const msg = `Olá Leonardo! Sou ${data.get("name")}. Objetivo: ${data.get("goal")}. ${data.get("message") ?? ""}`;
    window.open(`${WHATSAPP.split("?")[0]}?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
  }

  return (
    <section id="contato" className="py-24 md:py-32">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">Contato</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            Vamos conversar sobre sua <span className="text-gradient-accent">evolução</span>.
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Aplique para a consultoria online ou agende uma avaliação presencial.
          </p>
          <div className="space-y-5">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary transition-colors">
                <MessageCircle className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">WhatsApp</div>
                <div className="font-bold">Falar com Leonardo</div>
              </div>
            </a>
            <a href="https://www.instagram.com/personalleonardo/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Instagram</div>
                <div className="font-bold">@personalleonardo</div>
              </div>
            </a>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Atendimento</div>
                <div className="font-bold">Seg a Sáb · 06h às 22h</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">E-mail</div>
                <div className="font-bold">contato@personalleonardo.com</div>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-card border border-border space-y-5">
          <h3 className="text-2xl font-display font-bold">Fale com Leonardo</h3>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground" htmlFor="name">Nome</label>
            <input id="name" name="name" required className="mt-2 w-full bg-background border border-border rounded-lg px-4 py-3 focus:border-primary outline-none transition-colors" placeholder="Seu nome" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground" htmlFor="goal">Objetivo principal</label>
            <select id="goal" name="goal" required className="mt-2 w-full bg-background border border-border rounded-lg px-4 py-3 focus:border-primary outline-none transition-colors">
              <option>Emagrecimento</option>
              <option>Hipertrofia</option>
              <option>Performance</option>
              <option>Recomposição corporal</option>
            </select>
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground" htmlFor="message">Mensagem</label>
            <textarea id="message" name="message" rows={4} className="mt-2 w-full bg-background border border-border rounded-lg px-4 py-3 focus:border-primary outline-none transition-colors resize-none" placeholder="Me conte um pouco sobre você..." />
          </div>
          <button type="submit" className="w-full py-4 rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-wider text-sm hover:scale-[1.02] transition-transform glow-accent">
            {sent ? "Abrindo WhatsApp..." : "Enviar Aplicação"}
          </button>
        </form>
      </div>
    </section>
  );
}
