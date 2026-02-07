/* eslint-disable */
// @ts-nocheck
import type { Film } from './film';

export interface FilmResponse {
  /** Статус запроса */
  success: boolean;
  /** Причина ошибки */
  reason?: string;
  /** Фильм */
  film: Film;
}
