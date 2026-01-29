import { Link, useLocation, useNavigate, useParams } from 'react-router';

import { ChevronLeft } from 'lucide-react';

import { useCinemaControllerGetFilm } from '@/api/generated/endpoints/🍿-cinema/🍿-cinema';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import { MovieDetails } from '@/features/movie/MovieDetails';
import { MoviePoster } from '@/features/movie/MoviePoster';
import { MovieSchedule } from '@/features/movie/MovieSchedule';

export function MoviePage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id = '' } = useParams<{ id: string }>();

  const movieFromState = state?.data;
  const {
    data: apiResponse,
    isLoading,
    isError,
  } = useCinemaControllerGetFilm(id, {
    query: { enabled: !!id && !movieFromState },
  });

  const currentMovie = movieFromState || apiResponse?.film;

  if (isLoading && !currentMovie) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка загрузки</div>;

  if (!currentMovie) {
    return (
      <section>
        <Typography>
          Данные не найдены. Попробуйте вернуться на главную.
        </Typography>
        <Button onClick={() => navigate('/')}>На главную</Button>
      </section>
    );
  }

  return (
    <section className="flex flex-col w-full items-start gap-8 py-8">
      <Button
        variant="ghost"
        onClick={() => navigate(-1)}
        className="gap-4 text-primary-foreground/70"
      >
        <ChevronLeft className="size-5" />
        Назад
      </Button>

      <div className="flex flex-col w-full gap-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3 max-w-75">
            <MoviePoster data={currentMovie} radius={8} />
          </div>

          <div className="flex flex-col flex-1 gap-4">
            <MovieDetails data={currentMovie} typographyVariant={'h1'} />
            <Typography className="text-base leading-6 text-primary-foreground/90">
              {currentMovie.description}
            </Typography>
          </div>
        </div>

        <MovieSchedule
          id={id}
          renderAction={(selected) =>
            selected ? (
              <Button asChild size="lg">
                <Link
                  to={`/films/${id}/payment/step-1`}
                  state={{ seance: selected }}
                >
                  Выбрать места
                </Link>
              </Button>
            ) : (
              <Button size="lg" disabled>
                Выбрать места
              </Button>
            )
          }
        />
      </div>
    </section>
  );
}
