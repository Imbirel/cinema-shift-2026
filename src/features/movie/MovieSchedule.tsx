import { type ReactNode, useMemo, useState } from 'react';

import { useCinemaControllerGetFilmSchedule } from '@/api/generated/endpoints/🍿-cinema/🍿-cinema';
import type { FilmSchedule, FilmScheduleSeance } from '@/api/generated/models';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Typography } from '@/components/ui/typography';

type Place = FilmScheduleSeance['hall']['places'][number][number];

export interface SelectedSeanceInfo {
  movieId: string;
  date: string;
  time: string;
  hallName: string;
  places: Place[][];
}

const formatSchedules = (schedules: FilmSchedule[]) =>
  schedules.map((day) => ({
    date: day.date,
    halls: day.seances.reduce<Record<string, FilmScheduleSeance[]>>(
      (acc, seance) => {
        const name = seance.hall?.name;
        if (!acc[name]) acc[name] = [];
        acc[name].push(seance);
        return acc;
      },
      {},
    ),
  }));

export function MovieSchedule({
  id,
  renderAction,
}: {
  id: string;
  renderAction?: (selected: SelectedSeanceInfo | null) => ReactNode;
}) {
  const { data, isLoading } = useCinemaControllerGetFilmSchedule(id);
  const [selectedSeance, setSelectedSeance] =
    useState<SelectedSeanceInfo | null>(null);

  const formattedSchedules = useMemo(() => {
    if (!data?.schedules) return [];

    const rawSchedules = Array.isArray(data.schedules)
      ? data.schedules
      : [data.schedules as unknown as FilmSchedule];

    return formatSchedules(rawSchedules);
  }, [data]);

  if (isLoading)
    return (
      <div className="h-40 flex items-center justify-center">Загрузка...</div>
    );
  if (!formattedSchedules.length) return null;

  const handleSelect = (val: string, day: (typeof formattedSchedules)[0]) => {
    if (!val) return;
    const [hallName, time] = val.split(':::');
    if (!hallName) return;
    const seance = day.halls[hallName]?.find((s) => s.time === time);

    if (seance) {
      setSelectedSeance({
        movieId: id,
        date: day.date,
        time: seance.time,
        hallName,
        places: seance.hall.places,
      });
    }
  };

  return (
    <div className="flex flex-col gap-6 mt-4">
      <Typography variant="h2">Расписание</Typography>

      <Tabs
        defaultValue={formattedSchedules[0]?.date}
        onValueChange={() => setSelectedSeance(null)}
      >
        <TabsList>
          {formattedSchedules.map(({ date }) => (
            <TabsTrigger key={date} value={date}>
              {date}
            </TabsTrigger>
          ))}
        </TabsList>

        {formattedSchedules.map((day) => (
          <TabsContent key={day.date} value={day.date} className="mt-6">
            <ToggleGroup
              type="single"
              variant="outline"
              className="flex flex-col items-start gap-8"
              onValueChange={(val) => handleSelect(val, day)}
              spacing={2}
            >
              {Object.entries(day.halls).map(([name, seances]) => (
                <HallGroup key={name} name={name} seances={seances} />
              ))}
            </ToggleGroup>
          </TabsContent>
        ))}
      </Tabs>

      {renderAction && (
        <div className="pt-6">{renderAction(selectedSeance)}</div>
      )}
    </div>
  );
}

const HALL_NAMES: Record<string, string> = {
  red: 'Красный зал',
  green: 'Зеленый зал',
  blue: 'Фиолетовый зал',
};

function HallGroup({
  name,
  seances,
}: {
  name: string;
  seances: FilmScheduleSeance[];
}) {
  return (
    <div className="flex flex-col gap-3 w-full">
      <Typography variant="h4" className="text-muted-foreground">
        {HALL_NAMES[name] || name}
      </Typography>
      <div className="flex flex-wrap gap-2">
        {seances.map(({ time }) => (
          <ToggleGroupItem
            key={time}
            value={`${name}:::${time}`}
            className="min-w-17.5 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
          >
            {time}
          </ToggleGroupItem>
        ))}
      </div>
    </div>
  );
}
