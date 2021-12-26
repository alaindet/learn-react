import { State, Action, ActionType } from '../types';
import { battleCleanupReducer } from './battle-cleanup';
import { battleEndReducer } from './battle-end';
import { battleReducer } from './battle';
import { battleStartReducer } from './battle-start';
import { setFeature } from './set-feature';
import { setPlayersReducer } from './set-players';

export const mainReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.SetPlayers:
      return setPlayersReducer(state, action);
    case ActionType.BattleStart:
      return battleStartReducer(state, action);
    case ActionType.Battle:
      return battleReducer(state, action);
    case ActionType.BattleEnd:
      return battleEndReducer(state, action);
    case ActionType.BattleCleanup:
      return battleCleanupReducer(state, action);
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
