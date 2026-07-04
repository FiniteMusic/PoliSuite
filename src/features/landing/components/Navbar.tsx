import { Link } from "react-router-dom";
import Logo from "@/components/common/Logo";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-poli-border bg-poli-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />

        <nav className="hidden items-center gap-6 text-sm font-medium text-poli-textMuted md:flex">
          <a href="#features" className="transition hover:text-poli-text">
            Características
          </a>
          <a href="#how-it-works" className="transition hover:text-poli-text">
            Cómo funciona
          </a>
          <a href="#about" className="transition hover:text-poli-text">
            Proyecto
          </a>
        </nav>

        <Link to="/scheduler">
          <Button>Generar horario</Button>
        </Link>
      </div>
    </header>
  );
}