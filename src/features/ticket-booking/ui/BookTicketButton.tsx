import { Link } from 'react-router';

import type { SelectedSeanceInfo } from '@/entities/movie';
import { Button } from '@/shared/ui/button/button';

interface BookTicketButtonProps {
  movieId: string;
  seance?: SelectedSeanceInfo | null;
}

export const BookTicketButton = ({
  movieId,
  seance,
}: BookTicketButtonProps) => {
  if (!seance) {
    return (
      <Button size="xl" disabled className="w-full md:w-82">
        Выберите зал и время
      </Button>
    );
  }
  return (
    <Button size="xl" asChild className="w-full md:w-82">
      <Link to={`/films/${movieId}/payment/step-1`} state={{ seance }}>
        Продолжить
      </Link>
    </Button>
  );
};
