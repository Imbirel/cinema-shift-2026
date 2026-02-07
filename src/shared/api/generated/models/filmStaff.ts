/* eslint-disable */
// @ts-nocheck
import type { FilmStaffProfessions } from './filmStaffProfessions';

export interface FilmStaff {
  /** Идентификатор персоны */
  id: string;
  /** Список профессий */
  professions: FilmStaffProfessions;
  /** Полное имя персоны */
  fullName: string;
}
