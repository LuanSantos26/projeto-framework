import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#solucoes" className="text-foreground/70 hover:text-foreground transition-colors">
              Soluções
            </a>
            <a href="#sobre" className="text-foreground/70 hover:text-foreground transition-colors">
              Sobre
            </a>
            <a href="#contato" className="text-foreground/70 hover:text-foreground transition-colors">
              Contato
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost">Entrar</Button>
            <Button>Começar Agora</Button>
          </div>

          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
