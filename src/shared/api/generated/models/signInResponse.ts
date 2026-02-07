/* eslint-disable */
// @ts-nocheck
import type { User } from './user';

export interface SignInResponse {
  /** Статус запроса */
  success: boolean;
  /** Причина ошибки */
  reason?: string;
  /** Пользователь */
  user: User;
  /** Пользовательский токен */
  token: string;
}
