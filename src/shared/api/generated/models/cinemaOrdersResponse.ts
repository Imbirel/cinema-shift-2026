/* eslint-disable */
// @ts-nocheck
import type { CinemaOrder } from './cinemaOrder';

export interface CinemaOrdersResponse {
  /** Статус запроса */
  success: boolean;
  /** Причина ошибки */
  reason?: string;
  /** Заказы */
  orders: CinemaOrder[];
}
