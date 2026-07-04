export type Day =
  | "Lunes"
  | "Martes"
  | "Miércoles"
  | "Jueves"
  | "Viernes"
  | "Sábado";

export type Group = {
  id: string;
  subject: string;
  groupCode: string;
  teacher: string;
  days: Day[];
  startTime: string;
  endTime: string;
};

export type Schedule = Group[];