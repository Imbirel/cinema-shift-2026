/* eslint-disable */
// @ts-nocheck

/**
 * Список профессий
 */
export type FilmStaffProfessions =
  (typeof FilmStaffProfessions)[keyof typeof FilmStaffProfessions];

export const FilmStaffProfessions = {
  ACTOR: 'ACTOR',
  DIRECTOR: 'DIRECTOR',
} as const;
