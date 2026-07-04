import type { Group, Schedule } from "../types/schedule";

function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

export function groupsOverlap(a: Group, b: Group): boolean {
  const shareDay = a.days.some((day) => b.days.includes(day));

  if (!shareDay) return false;

  const aStart = timeToMinutes(a.startTime);
  const aEnd = timeToMinutes(a.endTime);
  const bStart = timeToMinutes(b.startTime);
  const bEnd = timeToMinutes(b.endTime);

  return aStart < bEnd && bStart < aEnd;
}

export function isValidSchedule(schedule: Schedule): boolean {
  for (let i = 0; i < schedule.length; i++) {
    for (let j = i + 1; j < schedule.length; j++) {
      if (groupsOverlap(schedule[i], schedule[j])) {
        return false;
      }
    }
  }

  return true;
}

export function generateSchedules(groups: Group[]): Schedule[] {
  const subjects = [...new Set(groups.map((group) => group.subject))];

  const groupsBySubject = subjects.map((subject) =>
    groups.filter((group) => group.subject === subject)
  );

  const results: Schedule[] = [];

  function backtrack(index: number, currentSchedule: Schedule) {
    if (index === groupsBySubject.length) {
      results.push([...currentSchedule]);
      return;
    }

    const subjectGroups = groupsBySubject[index];

    for (const group of subjectGroups) {
      const hasOverlap = currentSchedule.some((selectedGroup) =>
        groupsOverlap(group, selectedGroup)
      );

      if (!hasOverlap) {
        currentSchedule.push(group);
        backtrack(index + 1, currentSchedule);
        currentSchedule.pop();
      }
    }
  }

  backtrack(0, []);

  return results;
}