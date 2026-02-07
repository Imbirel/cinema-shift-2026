/* eslint-disable */
// @ts-nocheck
import type { Film } from './film';

export interface FilmsResponse {
  /** Статус запроса */
  success: boolean;
  /** Причина ошибки */
  reason?: string;
  /** Фильмы */
  films: Film[];
}
