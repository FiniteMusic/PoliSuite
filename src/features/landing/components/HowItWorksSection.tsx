import { CheckCircle2, SlidersHorizontal, Upload } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Abre SAES como siempre",
    description:
      "Inicia sesión desde la plataforma oficial del IPN. PoliSuite no pide boleta, contraseña ni datos de acceso.",
  },
  {
    icon: SlidersHorizontal,
    title: "Activa PoliSuite",
    description:
      "La extensión lee únicamente la información visible en pantalla: materias, grupos, profesores y horarios.",
  },
  {
    icon: CheckCircle2,
    title: "Genera tu mejor horario",
    description:
      "PoliSuite descarta empalmes, aplica tus preferencias y ordena las combinaciones con PoliScore.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-poli-primary">
            Cómo funciona
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-poli-text md:text-4xl">
            Tres pasos para dejar de pelearte con los horarios.
          </h2>

          <p className="mt-4 text-lg leading-8 text-poli-textMuted">
            La idea es simple: tú eliges qué quieres llevar, PoliSuite hace el
            trabajo pesado.
          </p>
        </div>

        <div className="grid gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.title}
                className="flex gap-5 rounded-3xl border border-poli-border bg-poli-surface p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-poli-primary/10 text-poli-primary">
                  <Icon className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-poli-primary">
                    Paso {index + 1}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-poli-text">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-7 text-poli-textMuted">
                    {step.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}