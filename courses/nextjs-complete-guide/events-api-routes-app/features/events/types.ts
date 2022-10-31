export interface LiveEvent {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
}

export interface LiveEventFilters {
  year: number;
  month: number;
}

export interface CreateLiveEventRequest {
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
}
