import { useLocation, useNavigate, useParams } from 'react-router';

import { ChevronLeft } from 'lucide-react';

import { BookTicketButton } from '@/features/ticket-booking';
import { useCinemaControllerGetFilm } from '@/shared/api/generated/endpoints/cinema/cinema';
import type { Film } from '@/shared/api/generated/models';
import { Button } from '@/shared/ui/button/button';
import { Typography } from '@/shared/ui/typography';
import { MovieInfo } from '@/widgets/movie-info';
import { MovieSchedule } from '@/widgets/movie-schedule';

export function MoviePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { data?: Film } | null;
  const { id = '' } = useParams<{ id: string }>();

  const movieFromState = state?.data;
  const {
    data: apiResponse,
    isLoading,
    isError,
  } = useCinemaControllerGetFilm(id, {
    query: { enabled: !!id && !movieFromState },
  });

  const currentMovie = movieFromState ?? apiResponse?.film;

  if (isLoading && !currentMovie) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка загрузки</div>;

  if (!currentMovie) {
    return (
      <section>
        <Typography>
          Данные не найдены. Попробуйте вернуться на главную.
        </Typography>
        <Button
          onClick={() => {
            void navigate('/');
          }}
        >
          На главную
        </Button>
      </section>
    );
  }

  return (
    <section className="flex flex-col w-full items-start gap-8 py-8">
      <Button
        variant="ghost"
        onClick={() => {
          void navigate(-1);
        }}
        className="gap-4 text-primary-foreground/70"
      >
        <ChevronLeft className="size-5" />
        Назад
      </Button>

      <div className="flex flex-col w-full gap-12">
        <MovieInfo movie={currentMovie} />

        <MovieSchedule
          id={id}
          renderAction={(seance) => (
            <BookTicketButton movieId={id} seance={seance} />
          )}
        />
      </div>
    </section>
  );
}
