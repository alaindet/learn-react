import { createAsyncThunk } from '@reduxjs/toolkit';

import { client } from 'src/api';
import { Forecast, FetchWeatherForecastError } from '../types';

export const fetchWeatherForecast = createAsyncThunk<
  Forecast,
  { lat: string; lon: string },
  { rejectValue: FetchWeatherForecastError }
>('weather/fetchForecast', async (payload, thunkApi) => {

  const url = `/compact.json?lat=${payload.lat}&lon=${payload.lon}`;
  const response = await client.get(url);

  if (response.status !== 200) {
    const message = 'Failed to fetch forecast';
    return thunkApi.rejectWithValue({ message });
  }

  return response.data as Forecast;
});
