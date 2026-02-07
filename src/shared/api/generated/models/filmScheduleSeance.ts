/* eslint-disable */
// @ts-nocheck
import type { FilmHall } from './filmHall';

export interface FilmScheduleSeance {
  /** Время сеанса */
  time: string;
  /** Зал */
  hall: FilmHall;
}
