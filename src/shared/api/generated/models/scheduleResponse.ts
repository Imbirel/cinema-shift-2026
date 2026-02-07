/* eslint-disable */
// @ts-nocheck
import type { FilmSchedule } from './filmSchedule';

export interface ScheduleResponse {
  /** Статус запроса */
  success: boolean;
  /** Причина ошибки */
  reason?: string;
  /** Расписание */
  schedules: FilmSchedule;
}
