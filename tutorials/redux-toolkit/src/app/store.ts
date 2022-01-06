import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { weatherReducer } from 'src/features/weather';

// Reducers
const reducer = {
  weather: weatherReducer,
};

// Store
// https://redux-toolkit.js.org/api/configureStore
export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
