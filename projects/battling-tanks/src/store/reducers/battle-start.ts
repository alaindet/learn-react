import { Action, State } from '../types';

export const battleStartReducer = (state: State, _: Action): State => {
  return {
    ...state,
    isRolling: true,
  };
};
