/* eslint-disable */
// @ts-nocheck
import type { Country } from './country';
import type { FilmAgeRating } from './filmAgeRating';
import type { FilmStaff } from './filmStaff';
import type { FilmUserRating } from './filmUserRating';

export interface Film {
  /** Идентификатор фильма */
  id: string;
  /** Название фильма */
  name: string;
  /** Оригинальное название */
  originalName: string;
  /** Описание фильма */
  description: string;
  /** Дата выхода */
  releaseDate: string;
  /** Актеры */
  actors: FilmStaff[];
  /** Режиссер */
  directors: FilmStaff[];
  /** Продолжительность */
  runtime: number;
  /** Возрастное ограничение */
  ageRating: FilmAgeRating;
  genres: string[];
  /** Рейтинг пользователей */
  userRatings: FilmUserRating;
  /** Изображение фильма */
  img: string;
  /** Страна */
  country?: Country | null;
}
