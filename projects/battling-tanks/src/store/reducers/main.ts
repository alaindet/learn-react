import { State, Action, ActionType } from '../types';
import { setPlayersReducer } from './set-players';
import { fightStartReducer } from './fight-start';
import { fightReducer } from './fight';
import { fightEndReducer } from './fight-end';

export const mainReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.SetPlayers:
      return setPlayersReducer(state, action);
    case ActionType.FightStart:
      return fightStartReducer(state, action);
    case ActionType.FightEnd:
      return fightEndReducer(state, action);
    case ActionType.Fight:
      return fightReducer(state, action);
    default:
      return state;
  }
};
