import { createSlice } from "@reduxjs/toolkit";

import { INITIAL_STATE, SLICE_NAME } from './state';
import { fetchWeatherForecast } from './fetch-weather-forecast';
import * as fromReducers from './reducers';

export const weatherSlice = createSlice({
  name: SLICE_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    increment: fromReducers.increment,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherForecast.pending, fromReducers.forecastPending);
    builder.addCase(fetchWeatherForecast.fulfilled, fromReducers.forecastSuccess);
    builder.addCase(fetchWeatherForecast.rejected, fromReducers.forecastFailure);
  },
});

// Actions
export const {
  increment,
} = weatherSlice.actions;

export const weatherReducer = weatherSlice.reducer;
