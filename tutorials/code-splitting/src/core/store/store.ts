import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import commonReducer from './common.slice';
import aboutReducer from 'src/features/about/store';

// TODO: https://redux.js.org/usage/code-splitting
export const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    common: commonReducer,
    about: aboutReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
