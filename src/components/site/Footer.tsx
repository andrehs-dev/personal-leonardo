import { Dumbbell, Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 font-display font-bold mb-4">
              <Dumbbell className="w-5 h-5 text-primary" />
              <span>PERSONAL <span className="text-primary">/</span> LEONARDO</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transforme seu corpo e sua mentalidade com treino personalizado de verdade.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Navegação</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#servicos" className="hover:text-primary">Serviços</a></li>
              <li><a href="#metodo" className="hover:text-primary">Método</a></li>
              <li><a href="#sobre" className="hover:text-primary">Sobre</a></li>
              <li><a href="#depoimentos" className="hover:text-primary">Depoimentos</a></li>
              <li><a href="#contato" className="hover:text-primary">Contato</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Conecte-se</div>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/personalleonardo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-2 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Personal Leonardo. Todos os direitos reservados.</span>
          <span>Treino que transforma.</span>
        </div>
      </div>
    </footer>
  );
}
