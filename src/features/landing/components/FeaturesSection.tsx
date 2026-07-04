import { CalendarCheck, GitBranch, Star } from "lucide-react";

const features = [
  {
    icon: CalendarCheck,
    title: "Generador inteligente",
    description:
      "Crea combinaciones de horario automáticamente a partir de tus materias y grupos disponibles.",
  },
  {
    icon: GitBranch,
    title: "Sin empalmes",
    description:
      "Descarta horarios incompatibles para que no tengas que revisar cada grupo manualmente.",
  },
  {
    icon: Star,
    title: "Score",
    description:
      "Ordena los horarios por calidad para ayudarte a elegir la mejor opción según tus preferencias.",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-poli-primary">
          Características
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-poli-text md:text-4xl">
          Todo lo que necesitas para planear tu inscripción.
        </h2>

        <p className="mt-4 text-lg leading-8 text-poli-textMuted">
          PoliSuite reduce el tiempo que pasas comparando grupos y te ayuda a
          tomar mejores decisiones antes de entrar al SAES.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <article
              key={feature.title}
              className="rounded-3xl border border-poli-border bg-poli-surface p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-poli-primary/10 text-poli-primary">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-poli-text">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-poli-textMuted">
                {feature.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}