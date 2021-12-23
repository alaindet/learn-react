import { PlayerData } from 'src/common/types';
import { Action, State } from '../types';

// export const setAttackerReducer = (state: State, action: Action<PlayerData>): State  => {
//   return { ...state, attacker: action.payload };
// };

// export const setDefenderReducer = (state: State, action: Action<PlayerData>): State => {
//   return { ...state, defender: action.payload };
// };

export const setPlayersReducer = (state: State, action: Action<any>): State => {
  return state;
};
