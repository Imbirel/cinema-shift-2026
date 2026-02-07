import { Star } from 'lucide-react';

import { cn } from '../../lib/cn';

interface StarRatingProps {
  rating: string | number;
  size?: number;
  className?: string;
}

export const StarRating = ({
  rating,
  size = 24,
  className,
}: StarRatingProps) => {
  const numericRating =
    typeof rating === 'string' ? parseFloat(rating) : rating;
  const normalizedRating = numericRating / 2;

  return (
    <div
      aria-label={`Рейтинг: ${String(numericRating)} из 10`}
      className={cn('flex items-center gap-0.5', className)}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const fillPercentage =
          Math.min(Math.max(normalizedRating - i, 0), 1) * 100;

        return (
          <div key={i} className="relative h-6 w-6">
            <Star size={size} className="fill-indicator text-indicator" />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${String(fillPercentage)}%` }}
            >
              <Star
                size={size}
                className="fill-indicator-foreground text-indicator-foreground"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
