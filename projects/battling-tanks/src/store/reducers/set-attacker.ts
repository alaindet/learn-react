import { PlayerData } from 'src/common/types';
import { Action, State } from '../types';

export const setAttackerReducer = (state: State, action: Action<PlayerData>): State  => {
  return { ...state, attacker: action.payload };
};
