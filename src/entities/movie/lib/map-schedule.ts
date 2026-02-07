import type {
  FilmSchedule,
  FilmScheduleSeance,
} from '@/shared/api/generated/models';

export const formatSchedules = (schedules: FilmSchedule[]) =>
  schedules.map((day) => ({
    date: day.date,
    halls: day.seances.reduce<Record<string, FilmScheduleSeance[]>>(
      (acc, seance) => {
        const name = seance.hall.name || 'Unknown Hall';
        (acc[name] ??= []).push(seance);
        return acc;
      },
      {},
    ),
  }));

export const getNormalizedSchedules = (
  schedulesRaw: FilmSchedule | FilmSchedule[] | undefined,
) => {
  if (!schedulesRaw) return [];

  const normalized = Array.isArray(schedulesRaw)
    ? schedulesRaw
    : [schedulesRaw];

  return formatSchedules(normalized);
};
