import { Action, State } from '../types';

export const fightEndReducer = (state: State, _: Action): State => {
  return { ...state, isRolling: true };
};
