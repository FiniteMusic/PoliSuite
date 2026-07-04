import { ArrowRight, CalendarCheck, Clock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const schedule = [
    [
      { label: "Cálculo", tone: "bg-poli-primary" },
      { label: "", tone: "bg-poli-primary/15" },
      { label: "Redes", tone: "bg-poli-primary/80" },
    ],
    [
      { label: "", tone: "bg-poli-primary/15" },
      { label: "BD II", tone: "bg-poli-primary" },
    ],
    [
      { label: "POO", tone: "bg-poli-primary/80" },
      { label: "", tone: "bg-poli-primary/15" },
      { label: "Inglés", tone: "bg-poli-primary" },
    ],
    [
      { label: "", tone: "bg-poli-primary/15" },
      { label: "SO", tone: "bg-poli-primary/80" },
    ],
    [{ label: "Redes", tone: "bg-poli-primary" }],
  ];

  return (
    <section className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
      <div>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-poli-border bg-poli-surface px-4 py-2 text-sm text-poli-textMuted shadow-sm">
          <Sparkles className="h-4 w-4 text-poli-primary" />
          Compatible con SAES para estudiantes del IPN
        </div>

        <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-poli-text md:text-6xl">
          Inscribirte nunca fue{" "}
          <span className="text-poli-primary">tan fácil.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-poli-textMuted md:text-xl">
          PoliSuite encuentra automáticamente las mejores combinaciones de
          horario para tus materias. Sin empalmes, sin hojas de Excel y sin
          abrir veinte pestañas del SAES.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/scheduler">
            <Button size="lg" className="w-full sm:w-auto">
              Comenzar ahora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>

          <a href="#how-it-works">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Ver cómo funciona
            </Button>
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 -z-10 rounded-full bg-poli-primary/10 blur-3xl" />

        <div className="rounded-3xl border border-poli-border bg-poli-surface p-6 shadow-2xl">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-poli-textMuted">
                Horario recomendado
              </p>
              <h2 className="text-2xl font-bold text-poli-text">
                Score 96/100
              </h2>
            </div>

            <div className="rounded-2xl bg-poli-primary/10 p-3 text-poli-primary">
              <CalendarCheck className="h-6 w-6" />
            </div>
          </div>

          <div className="grid grid-cols-5 gap-3 text-center text-sm font-medium text-poli-textMuted">
            {["L", "M", "Mi", "J", "V"].map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-5 gap-2">
            {schedule.map((day, dayIndex) => (
              <div key={dayIndex} className="space-y-2">
                {day.map((block, blockIndex) =>
                  block.label ? (
                    <div
                      key={blockIndex}
                      className={`flex h-16 flex-col justify-center rounded-xl px-2 shadow-sm ${block.tone}`}
                    >
                      <span className="truncate text-[11px] font-semibold leading-tight text-white">
                        {block.label}
                      </span>
                    </div>
                  ) : (
                    <div
                      key={blockIndex}
                      className={`h-10 rounded-xl border border-dashed border-poli-primary/20 ${block.tone}`}
                    />
                  )
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-2xl bg-poli-background p-3">
              <p className="text-sm font-semibold text-poli-text">
                Sin empalmes
              </p>
            </div>
            <div className="rounded-2xl bg-poli-background p-3">
              <p className="text-sm font-semibold text-poli-text">
                Sale temprano
              </p>
            </div>
            <div className="rounded-2xl bg-poli-background p-3">
              <p className="text-sm font-semibold text-poli-text">
                Viernes ligero
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-sm text-poli-textMuted">
            <Clock className="h-4 w-4 text-poli-primary" />
            Generado en segundos
          </div>
        </div>
      </div>
    </section>
  );
}