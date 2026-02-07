/* eslint-disable */
// @ts-nocheck

/**
 * Статус билета
 */
export type CinemaTicketStatus =
  (typeof CinemaTicketStatus)[keyof typeof CinemaTicketStatus];

export const CinemaTicketStatus = {
  PAYED: 'PAYED',
  CANCELED: 'CANCELED',
} as const;
