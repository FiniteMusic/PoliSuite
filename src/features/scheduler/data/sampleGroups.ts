import type { Group } from "../types/schedule";

export const sampleGroups: Group[] = [
  {
    id: "bd-3cm1",
    subject: "Bases de Datos",
    groupCode: "3CM1",
    teacher: "Profesor A",
    days: ["Lunes", "Miércoles"],
    startTime: "07:00",
    endTime: "08:30",
  },
  {
    id: "bd-3cm2",
    subject: "Bases de Datos",
    groupCode: "3CM2",
    teacher: "Profesor B",
    days: ["Martes", "Jueves"],
    startTime: "10:30",
    endTime: "12:00",
  },
  {
    id: "ia-3cm1",
    subject: "Inteligencia Artificial",
    groupCode: "3CM1",
    teacher: "Profesor C",
    days: ["Lunes", "Miércoles"],
    startTime: "08:30",
    endTime: "10:00",
  },
  {
    id: "ia-3cm2",
    subject: "Inteligencia Artificial",
    groupCode: "3CM2",
    teacher: "Profesor D",
    days: ["Lunes", "Miércoles"],
    startTime: "08:00",
    endTime: "09:30",
  },
];