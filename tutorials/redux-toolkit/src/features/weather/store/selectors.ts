import { RootState } from 'src/app/store';
import { SLICE_NAME, WeatherState } from './state';

export const selectForecast = (state: RootState): WeatherState['forecasts'] => {
  return state[SLICE_NAME].forecasts;
};
