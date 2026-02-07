import { type ReactNode, useMemo, useState } from 'react';

import {
  getNormalizedSchedules,
  HallGroup,
  type Place,
  type SelectedSeanceInfo,
} from '@/entities/movie';
import { useCinemaControllerGetFilmSchedule } from '@/shared/api/generated/endpoints/cinema/cinema';
import { formatToShortDayMonth } from '@/shared/lib/date';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/shared/ui/tabs/tabs';
import { ToggleGroup } from '@/shared/ui/toggle-group/toggle-group';
import { Typography } from '@/shared/ui/typography';

interface MovieScheduleProps {
  id: string;
  renderAction?: (selected: SelectedSeanceInfo | null) => ReactNode;
}

export function MovieSchedule({ id, renderAction }: MovieScheduleProps) {
  const { data, isLoading } = useCinemaControllerGetFilmSchedule(id);
  const [selectedSeance, setSelectedSeance] =
    useState<SelectedSeanceInfo | null>(null);

  const formattedSchedules = useMemo(
    () => getNormalizedSchedules(data?.schedules),
    [data],
  );

  const getSelectedValue = (dayDate: string) => {
    if (selectedSeance?.date === dayDate) {
      return `${selectedSeance.hallName}:::${selectedSeance.time}`;
    }
    return '';
  };

  if (isLoading)
    return (
      <div className="h-40 flex items-center justify-center">Загрузка...</div>
    );

  if (!formattedSchedules.length) return null;

  const handleSelect = (
    val: string,
    day: (typeof formattedSchedules)[number],
  ) => {
    if (!val) return;
    const [hallName, time] = val.split(':::');
    if (!hallName) return;
    const seance = day.halls[hallName]?.find((s) => s.time === time);

    if (seance?.hall) {
      setSelectedSeance({
        movieId: id,
        date: day.date,
        time: seance.time,
        hallName,
        places: seance.hall.places as Place[][],
      });
    }
  };

  return (
    <div className="flex flex-col gap-6 mt-4">
      <Typography variant="h2">Расписание</Typography>

      <Tabs
        defaultValue={formattedSchedules[0]?.date}
        onValueChange={() => {
          setSelectedSeance(null);
        }}
      >
        <TabsList className="inline-flex w-full sm:w-max justify-start overflow-x-auto overflow-y-hidden h-auto p-1 no-scrollbar">
          {formattedSchedules.map(({ date }) => (
            <TabsTrigger key={date} value={date}>
              {formatToShortDayMonth(date)}
            </TabsTrigger>
          ))}
        </TabsList>

        {formattedSchedules.map((day) => (
          <TabsContent key={day.date} value={day.date} className="mt-6">
            <ToggleGroup
              type="single"
              variant="outline"
              className="flex flex-col items-start gap-6"
              value={getSelectedValue(day.date)}
              onValueChange={(val) => {
                if (val) handleSelect(val, day);
              }}
              spacing={2}
              size="lg"
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
