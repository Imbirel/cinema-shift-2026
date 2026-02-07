/* eslint-disable */
// @ts-nocheck

/**
 * Статус заказа
 */
export type CinemaOrderStatus =
  (typeof CinemaOrderStatus)[keyof typeof CinemaOrderStatus];

export const CinemaOrderStatus = {
  PAYED: 'PAYED',
  CANCELED: 'CANCELED',
} as const;
