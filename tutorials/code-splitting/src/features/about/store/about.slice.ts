import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'src/core/store';

export interface AboutState {
  counter: 0;
}

export const SLICE_NAME = 'about';

const INITIAL_STATE: AboutState = {
  counter: 0,
};

export const aboutSlice = createSlice({
  name: SLICE_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    increment(state: AboutState) {
      state.counter += 1;
    },
    incrementBy(state: AboutState, action: PayloadAction<number>) {
      state.counter += action.payload;
    }
  },
});

export const {
  increment,
  incrementBy,
} = aboutSlice.actions;

export const selectCounter = (state: RootState) => {
  return (state[SLICE_NAME] as AboutState).counter;
};

export default aboutSlice.reducer;
