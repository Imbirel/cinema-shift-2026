import type { Film } from '@/api/generated/models';
import { Typography, type TypographyVariant } from '@/components/ui/typography';
import { StarRating } from '@/features/movie/StarRating';

const ageMap = {
  G: '0+',
  PG: '6+',
  PG13: '12+',
  R: '16+',
  NC17: '18+',
} as const;

export function MovieDetails({
  data,
  typographyVariant = 'h3',
}: {
  data: Film;
  typographyVariant?: TypographyVariant;
}) {
  type AgeRating = keyof typeof ageMap;
  const rating = data.ageRating as AgeRating;
  const russianRating = ageMap[rating] || 'Неизвестно';

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <Typography variant={typographyVariant}>
          {data.name} ({russianRating})
        </Typography>
        <Typography>Фильм</Typography>
      </div>

      <div className="flex flex-col gap-1">
        <StarRating rating={data.userRatings.kinopoisk} />
        <Typography>Kinopoisk - {data.userRatings.kinopoisk}</Typography>
      </div>
    </div>
  );
}
