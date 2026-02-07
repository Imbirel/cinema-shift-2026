/* eslint-disable */
// @ts-nocheck
import type { CreatePaymentDebitCardDto } from './createPaymentDebitCardDto';
import type { CreatePaymentPersonDto } from './createPaymentPersonDto';
import type { CreatePaymentSeanceDto } from './createPaymentSeanceDto';
import type { CreatePaymentTicketsDto } from './createPaymentTicketsDto';

export interface CreateCinemaPaymentDto {
  /** Идентификатор фильма */
  filmId: string;
  /** Покупатель */
  person: CreatePaymentPersonDto;
  /** Банковская карта */
  debitCard: CreatePaymentDebitCardDto;
  /** Сеанс фильма */
  seance: CreatePaymentSeanceDto;
  /** Билеты */
  tickets: CreatePaymentTicketsDto[];
}
