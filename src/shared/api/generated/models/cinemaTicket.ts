/* eslint-disable */
// @ts-nocheck
import type { CinemaTicketSeance } from './cinemaTicketSeance';
import type { CinemaTicketStatus } from './cinemaTicketStatus';

export interface CinemaTicket {
  /** ID билета */
  _id: string;
  /** Идентификатор фильма */
  filmId: string;
  /** Идентификатор заказа */
  orderId: string;
  /** Ряд */
  row: number;
  /** Место */
  column: number;
  /** Сеанс фильма */
  seance: CinemaTicketSeance;
  /** Телефон */
  phone: string;
  /** Статус билета */
  status: CinemaTicketStatus;
}
