/* eslint-disable */
// @ts-nocheck
import type { CinemaOrder } from './cinemaOrder';

export interface PaymentResponse {
  /** Статус запроса */
  success: boolean;
  /** Причина ошибки */
  reason?: string;
  /** Заказ */
  order: CinemaOrder;
}
