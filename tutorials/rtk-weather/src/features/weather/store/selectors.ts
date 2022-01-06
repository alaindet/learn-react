import { RootState } from 'src/core/store';
import { SLICE_NAME, WeatherState } from './state';

export const selectForecasts = (state: RootState): WeatherState['forecasts'] => {
  return state[SLICE_NAME].forecasts;
};

export const selectWeatherStatus = (state: RootState): WeatherState['status'] => {
  return state[SLICE_NAME].status;
};
