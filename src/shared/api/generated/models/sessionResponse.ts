/* eslint-disable */
// @ts-nocheck
import type { User } from './user';

export interface SessionResponse {
  /** Статус запроса */
  success: boolean;
  /** Причина ошибки */
  reason?: string;
  /** Пользователь */
  user: User;
}
