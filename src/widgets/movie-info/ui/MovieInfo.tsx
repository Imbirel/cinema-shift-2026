import { MoviePoster } from '@/entities/movie';
import { MovieDetails } from '@/entities/movie';
import type { Film } from '@/shared/api/generated/models';
import { Typography } from '@/shared/ui/typography';

interface MovieInfoProps {
  movie: Film;
}

export const MovieInfo = ({ movie }: MovieInfoProps) => (
  <div className="flex flex-col md:flex-row gap-8">
    <div className="w-full md:w-1/3 max-w-75">
      <MoviePoster data={movie} radius={8} />
    </div>
    <div className="flex flex-col flex-1 gap-4">
      <MovieDetails data={movie} typographyVariant="h1" />
      <Typography className="text-base leading-6 text-primary-foreground/90">
        {movie.description}
      </Typography>
    </div>
  </div>
);
