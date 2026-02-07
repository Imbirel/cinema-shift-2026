import { Link } from 'react-router';

import { Button } from '@/shared/ui/button/button';
import { Typography } from '@/shared/ui/typography';

export function NotFoundPage() {
  return (
    <div className="grow flex flex-col items-center justify-center text-center gap-2">
      <Typography
        as="div"
        variant="h1"
        className="text-9xl text-muted-foreground"
      >
        404
      </Typography>

      <Typography as="h1" variant="h2">
        Страница не найдена
      </Typography>

      <Typography variant="p" className="max-w-xs">
        Упс! Похоже, такая страница не существует или была перенесена.
      </Typography>

      <Button asChild size="xl" className="mt-6">
        <Link to="/">Вернуться на главную</Link>
      </Button>
    </div>
  );
}
