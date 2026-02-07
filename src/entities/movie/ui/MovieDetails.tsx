import type { Film } from '@/shared/api/generated/models';
import { StarRating } from '@/shared/ui/star-rating/star-rating';
import { Typography, type TypographyVariant } from '@/shared/ui/typography';

import { getRussianRating } from '../lib/mappers';

interface MovieDetailsProps {
  data: Film;
  typographyVariant?: TypographyVariant;
}

export function MovieDetails({
  data,
  typographyVariant = 'h3',
}: MovieDetailsProps) {
  const russianRating = getRussianRating(data.ageRating);

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
