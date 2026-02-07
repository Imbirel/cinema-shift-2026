/* eslint-disable */
// @ts-nocheck

/**
 * Возрастное ограничение
 */
export type FilmAgeRating = (typeof FilmAgeRating)[keyof typeof FilmAgeRating];

export const FilmAgeRating = {
  G: 'G',
  PG: 'PG',
  PG13: 'PG13',
  R: 'R',
  NC17: 'NC17',
} as const;
