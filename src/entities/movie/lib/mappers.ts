export const HALL_NAMES: Record<string, string> = {
  Red: 'Красный зал',
  Green: 'Зеленый зал',
  Blue: 'Фиолетовый зал',
};

export const AGE_MAP = {
  G: '0+',
  PG: '6+',
  PG13: '12+',
  R: '16+',
  NC17: '18+',
} as const;

export type AgeRating = keyof typeof AGE_MAP;

export const getRussianRating = (rating?: string | null): string => {
  if (!rating || !(rating in AGE_MAP)) {
    return 'Неизвестно';
  }
  return AGE_MAP[rating as AgeRating];
};

export const getReleaseYear = (date?: string | null) =>
  date?.split(' ').at(-1) ?? '';

export const getMovieImageUrl = (path?: string | null) =>
  path
    ? `${import.meta.env.VITE_API_BASE_URL}/api/${path}`
    : '/placeholder.avif';
