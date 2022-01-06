import { WeatherState } from './state';

export const increment = (state: WeatherState): void => {
  state.increment += 1;
};

export const forecastPending = (state: WeatherState): void => {
  state.status = 'loading';
  state.error = null;
};

export const forecastSuccess = (state: WeatherState, { payload }: any): void => {
  state.status = 'succeeded';
  state.forecasts.push(...[payload]);
};

export const forecastFailure = (state: WeatherState, { payload }: any): void => {
  state.status = 'failed';
  if (payload) {
    state.error = payload.message;
  }
};
