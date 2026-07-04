import { sampleGroups } from "@/features/scheduler/data/sampleGroups";
import { generateSchedules } from "@/features/scheduler/logic/scheduler";

export default function SchedulerPage() {
  const schedules = generateSchedules(sampleGroups);

  return (
    <main className="min-h-screen bg-poli-cream p-8 text-poli-gray">
      <h1 className="text-3xl font-bold text-poli-guinda">
        Generador de horarios
      </h1>

      <p className="mt-2">Horarios generados: {schedules.length}</p>
    </main>
  );
}