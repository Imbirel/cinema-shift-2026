import type { ReactNode } from 'react';

import type { Film } from '@/api/generated/models';
import { MovieDetails } from '@/features/movie/MovieDetails';
import { MoviePoster } from '@/features/movie/MoviePoster';

interface MovieCardProps {
  data: Film;
  action?: ReactNode;
}

export function MovieCard({ data, action }: MovieCardProps) {
  return (
    <article className="group relative transition-all flex flex-col h-full">
      <MoviePoster data={data} />

      <div className="flex flex-col flex-1 mt-4 gap-4">
        <MovieDetails data={data} />

        {action && <div className="w-full *:w-full mt-auto">{action}</div>}
      </div>
    </article>
  );
}
