import { Reducer, useReducer } from 'react';

import { PlayerInfo } from 'src/common/types';
import { State, Action } from '../store/types';
import { mainReducer } from '../store/reducers';
import * as fromActions from '../store/actions';
import { INITIAL_STATE } from '../store/state';

export const useBattlingTanks = () => {

  const actions = {
    setAttacker: (player: PlayerInfo): void => {
      dispatch(fromActions.setAttacker(player));
    },
    setDefender: (player: PlayerInfo): void => {
      dispatch(fromActions.setDefender(player));
    },
    fight: (): void => {
      dispatch(fromActions.fightStart());
      setTimeout(() => {
        dispatch(fromActions.fight());
        dispatch(fromActions.fightEnd());
      }, 500);
    }
  };

  // TODO: Remove
  const debugMiddleware = (state: State, action: Action): State => {
    console.log('---');
    console.log('PRE', action.type, state);
    const newState = mainReducer(state, action);
    console.log('POST', action.type, newState);
    console.log('---');
    return newState;
  };

  const [
    state,
    dispatch
  ] = useReducer<Reducer<State, Action>>(debugMiddleware, INITIAL_STATE);

  return {
    state,
    actions,
  };
};
