import { Link } from 'react-router';

import { useCinemaControllerGetCinemaToday } from '@/api/generated/endpoints/🍿-cinema/🍿-cinema';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import { MovieCard } from '@/features/movie/MovieCard';

export function CatalogPage() {
  const { data, isLoading } = useCinemaControllerGetCinemaToday();

  if (isLoading) return <div>загрузка</div>;

  return (
    <section className="w-full py-12">
      <div className="flex flex-col gap-4">
        <Typography variant="h2">Афиша</Typography>

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 items-stretch">
          {data?.films?.map((movie) => (
            <MovieCard
              key={movie.id}
              data={movie}
              action={
                <Button size="xl" asChild>
                  <Link to={`/films/${movie.id}`} state={{ movie }}>
                    Подробнее
                  </Link>
                </Button>
              }
            />
          ))}
        </section>
      </div>
    </section>
  );
}
