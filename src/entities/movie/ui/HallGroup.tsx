import type { FilmScheduleSeance } from '@/shared/api/generated/models';
import { ToggleGroupItem } from '@/shared/ui/toggle-group/toggle-group';
import { Typography } from '@/shared/ui/typography';

import { HALL_NAMES } from '../lib/mappers';

interface HallGroupProps {
  name: string;
  seances: FilmScheduleSeance[];
}

export function HallGroup({ name, seances }: HallGroupProps) {
  if (seances.length === 0) return null;

  return (
    <div className="flex flex-col gap-4 w-full">
      <Typography variant="p" as="h3" className="text-muted-foreground">
        {HALL_NAMES[name] ?? name}
      </Typography>
      <div className="flex flex-wrap gap-2">
        {seances.map(({ time }) => (
          <ToggleGroupItem
            key={time}
            value={`${name}:::${time}`}
            size="lg"
            className="min-w-16"
          >
            {time}
          </ToggleGroupItem>
        ))}
      </div>
    </div>
  );
}
