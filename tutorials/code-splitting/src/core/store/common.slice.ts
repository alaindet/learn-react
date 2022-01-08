import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from './store';

export interface Alert {
  message: string;
  level: 'info' | 'error';
}

export interface CommonState {
  alert: null | Alert;
}

export const SLICE_NAME = 'common';

const INITIAL_STATE: CommonState = {
  alert: null,
};

export const commonSlice = createSlice({
  name: SLICE_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    setAlert(state: CommonState, action: PayloadAction<Alert>) {
      state.alert = action.payload;
    },
    setInfoAlert(state: CommonState, action: PayloadAction<string>) {
      state.alert = { message: action.payload, level: 'info' };
    },
    setErrorAlert(state: CommonState, action: PayloadAction<string>) {
      state.alert = { message: action.payload, level: 'error' };
    },
    clearAlert(state: CommonState) {
      state.alert = null;
    }
  },
});

export const {
  setAlert,
  setInfoAlert,
  setErrorAlert,
  clearAlert,
} = commonSlice.actions;

export const selectAlert = (state: RootState) => {
  return state[SLICE_NAME].alert;
};

export default commonSlice.reducer;
