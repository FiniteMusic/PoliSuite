
import { ArrowRight, CalendarCheck, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const benefits = [
  "Sin empalmes",
  "Compatible con SAES",
  "Score",
  "100% gratuito",
];

export default function CTASection() {
  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden px-6 py-32">
      <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-poli-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-poli-primary/10 blur-3xl" />

      <div className="relative rounded-[2.5rem] border border-poli-border bg-card px-6 py-16 shadow-2xl md:px-16 md:py-20">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-poli-primary">
              PoliSuite para tu navegador
            </p>

            <h2 className="mt-4 max-w-xl text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              ¿Listo para dejar de pelearte con el SAES?
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-muted-foreground">
              Instala la extensión y deja que PoliSuite arme por ti el mejor
              horario posible, directamente sobre tu sesión de SAES.
            </p>

            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-poli-primary" />
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link to="/scheduler">
                <Button
                  size="lg"
                  className="h-14 bg-poli-primary px-8 text-base text-white hover:bg-poli-primary/90"
                >
                  Instalar extensión
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <a
                href="#how-it-works"
                className="text-sm font-semibold text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              >
                Ver demostración
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-poli-primary/10 blur-3xl" />

            <div className="rounded-3xl border border-poli-border bg-background p-6 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">Listo para instalar</p>
                  <p className="text-sm font-semibold text-foreground">
                    PoliSuite · Extensión
                  </p>
                </div>
                <div className="rounded-2xl bg-poli-primary/10 p-3 text-poli-primary">
                  <CalendarCheck className="h-6 w-6" />
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <div className="flex h-12 items-center rounded-xl bg-poli-primary px-4 text-sm font-semibold text-white">
                  07:00 Cálculo
                </div>
                <div className="flex h-12 items-center rounded-xl border border-poli-primary/20 bg-poli-primary/10 px-4 text-sm font-medium text-foreground">
                  09:00 BD II
                </div>
                <div className="flex h-12 items-center rounded-xl border border-poli-primary/20 bg-poli-primary/10 px-4 text-sm font-medium text-foreground">
                  10:30 Inglés
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-muted p-3 text-center text-sm font-semibold text-foreground">
                Score 96/100
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
