import { Star } from 'lucide-react';

export function StarRating({ rating }: { rating: string }) {
  const numericRating = parseFloat(rating);
  const starsCount = Math.round(numericRating / 2);

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={`${
            i < starsCount
              ? 'fill-indicator-foreground text-indicator-foreground'
              : 'fill-indicator text-indicator'
          }`}
        />
      ))}
    </div>
  );
}
