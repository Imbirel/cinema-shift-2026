/* eslint-disable */
// @ts-nocheck
import type { FilmScheduleSeance } from './filmScheduleSeance';

export interface FilmSchedule {
  /** Дата */
  date: string;
  /** Сеансы */
  seances: FilmScheduleSeance[];
}
