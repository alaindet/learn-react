import { State, Action, ActionType } from '../types';
import { setPlayersReducer } from './set-players';
import { fightStartReducer } from './fight-start';
import { fightReducer } from './fight';
import { fightEndReducer } from './fight-end';
import { setFeature } from './set-feature';

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
    case ActionType.SetFeature:
      return setFeature(state, action);
    default:
      return state;
  }
};

// TODO
export const devMainReducer = (state: State, action: Action): State => {
  console.log('---');
  console.log('DEV:BEFORE', action, state);
  const newState = mainReducer(state, action);
  console.log('DEV:AFTER', action, newState);
  console.log('---');
  return newState;
};
