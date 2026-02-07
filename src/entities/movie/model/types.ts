export interface Place {
  type: 'BLOCKED' | 'ECONOM' | 'COMFORT';
  price: number;
}

export interface SelectedSeanceInfo {
  movieId: string;
  date: string;
  time: string;
  hallName: string;
  places: Place[][];
}
