import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import commonReducer from './common.slice';
import aboutReducer from 'src/features/about/store';

export const store = configureStore({
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
