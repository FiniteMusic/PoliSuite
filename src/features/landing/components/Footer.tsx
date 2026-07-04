import { ExternalLink } from "lucide-react";
import Logo from "@/components/common/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-poli-border bg-poli-surface">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div className="lg:col-span-1">
            <Logo />

            <p className="mt-4 max-w-sm leading-7 text-poli-textMuted">
              La extensión que ayuda a los estudiantes del IPN a organizar
              mejor sus horarios dentro del SAES.
            </p>
          </div>

          {/* Producto */}
          <div>
            <h3 className="font-semibold text-poli-text">
              Producto
            </h3>

            <ul className="mt-4 space-y-3 text-poli-textMuted">
              <li>
                <a href="#features" className="hover:text-poli-primary transition">
                  Características
                </a>
              </li>

              <li>
                <a href="#how-it-works" className="hover:text-poli-primary transition">
                  Cómo funciona
                </a>
              </li>
            </ul>
          </div>

          {/* Proyecto */}
          <div>
            <h3 className="font-semibold text-poli-text">
              Proyecto
            </h3>

            <ul className="mt-4 space-y-3 text-poli-textMuted">
              <li>
                <a
                  href="https://github.com/FiniteMusic/PoliSuite.git"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-poli-primary transition"
                >
                  <ExternalLink className="h-4 w-4" />
                  GitHub
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-poli-primary transition">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-poli-text">
              Legal
            </h3>

            <ul className="mt-4 space-y-3 text-poli-textMuted">
              <li>Aviso de privacidad</li>
              <li>Términos de uso</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-poli-border pt-6 text-center text-sm text-poli-textMuted">
          <p>© 2026 PoliSuite v0.1.0. Todos los derechos reservados.</p>

          <p className="mt-2">
            PoliSuite es un proyecto independiente y no está afiliado
            oficialmente al Instituto Politécnico Nacional ni al sistema SAES.
          </p>
        </div>
      </div>
    </footer>
  );
}