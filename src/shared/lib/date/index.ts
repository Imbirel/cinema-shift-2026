export const formatToShortDayMonth = (dateStr: string): string => {
  if (!dateStr) return '';

  const parts = dateStr.split('.').map(Number);

  if (parts.length !== 3 || parts.some(isNaN)) {
    return dateStr;
  }

  const [day, month, year] = parts as [number, number, number];

  const date = new Date(2000 + year, month - 1, day);

  if (isNaN(date.getTime())) return dateStr;

  const formatter = new Intl.DateTimeFormat('ru-RU', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  });

  const formatted = formatter.format(date).replace('.', '');

  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
};
