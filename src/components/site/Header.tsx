import { Dumbbell, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#transformacoes", label: "Transformações" },
  { href: "#servicos", label: "Serviços" },
  { href: "#metodo", label: "Método" },
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

const WHATSAPP = "https://wa.me/5500000000000?text=Quero%20come%C3%A7ar%20minha%20evolu%C3%A7%C3%A3o%20com%20o%20Personal%20Leonardo";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40">
      <div className="container mx-auto flex items-center justify-between px-6 h-16">
        <a href="#top" className="flex items-center gap-2 font-display font-bold tracking-wider">
          <Dumbbell className="w-5 h-5 text-primary" />
          <span className="text-sm md:text-base">
            PERSONAL <span className="text-primary">/</span> LEONARDO
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-primary transition-colors uppercase tracking-wider text-xs">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center px-5 py-2 rounded-full bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wider hover:scale-105 transition-transform"
        >
          Começar Agora
        </a>
        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl">
          <nav className="flex flex-col px-6 py-4 gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-wider py-1 text-muted-foreground hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP}
              className="mt-2 inline-flex justify-center items-center px-5 py-3 rounded-full bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wider"
            >
              Começar Agora
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export { WHATSAPP };
