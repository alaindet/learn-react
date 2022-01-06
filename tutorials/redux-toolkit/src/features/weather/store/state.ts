import { Forecast } from '../types';

export interface WeatherState {
  forecasts: Forecast[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  increment: number;
}

export const INITIAL_STATE: WeatherState = {
  forecasts: [],
  status: 'idle',
  error: null,
  increment: 0,
};

export const SLICE_NAME = 'weather';
