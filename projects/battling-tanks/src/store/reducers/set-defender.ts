import { PlayerData } from 'src/common/types';
import { Action, State } from '../types';

export const setDefenderReducer = (state: State, action: Action<PlayerData>): State => {
  return { ...state, defender: action.payload };
};
