import { Action, State } from '../types';

export const fightStartReducer = (state: State, _: Action): State => {
  return { ...state, isRolling: true };
};
