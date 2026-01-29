import { cva, type VariantProps } from 'class-variance-authority';

import type { Film } from '@/api/generated/models';
import { cn } from '@/lib/utils';

const posterVariants = cva('relative overflow-hidden', {
  variants: {
    radius: {
      8: 'rounded-xs rounded-br-none',
      16: 'rounded-lg rounded-br-xs',
    },
  },
  defaultVariants: {
    radius: 16,
  },
});

interface MoviePosterProps extends VariantProps<typeof posterVariants> {
  data: Film;
  className?: string;
}

export function MoviePoster({ data, radius, className }: MoviePosterProps) {
  const releaseYear = data.releaseDate?.split(' ').at(-1) ?? '';

  return (
    <div className={cn(posterVariants({ radius }), className)}>
      <img
        src={`${import.meta.env.VITE_API_BASE_URL}/api/${data.img}`}
        alt={data.name}
        className="w-full aspect-square object-cover"
      />

      <div className="flex flex-col absolute bottom-0 right-0 bg-muted text-foreground text-sm leading-3.5 px-2 py-1 rounded-tl-xs text-right gap-1">
        <p className="font-medium">{data.genres[0]}</p>
        <p className="font-normal">
          {data.country?.name}, {releaseYear}
        </p>
      </div>
    </div>
  );
}
