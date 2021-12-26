import { Action, State } from '../types';

export const battleEndReducer = (state: State, _: Action): State => {
  return {
    ...state,
    isRolling: false,
  };
};
