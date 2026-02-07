/* eslint-disable */
// @ts-nocheck
import type { CinemaOrderStatus } from './cinemaOrderStatus';
import type { CinemaTicket } from './cinemaTicket';
import type { Film } from './film';
import type { FilmPerson } from './filmPerson';

export interface CinemaOrder {
  /** ID заказа */
  _id: string;
  /** Название фильма */
  film: Film;
  /** Номер заказа */
  orderNumber: number;
  /** Билеты */
  tickets: CinemaTicket[];
  /** Данные пользователя */
  person: FilmPerson;
  /** Статус заказа */
  status: CinemaOrderStatus;
}
