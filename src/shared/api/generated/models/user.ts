/* eslint-disable */
// @ts-nocheck

export interface User {
  /** ID пользователя */
  _id: string;
  /** Номер телефона */
  phone: string;
  /** Имя */
  firstname?: string;
  /** Отчество */
  middlename?: string;
  /** Фамилия */
  lastname?: string;
  /** Почта */
  email?: string;
  /** Город */
  city?: string;
}
