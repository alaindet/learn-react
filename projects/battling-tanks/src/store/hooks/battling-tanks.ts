import { Reducer, useReducer } from 'react';

import { PlayerInfo, PlayerData } from 'src/common/types';
import { State, Action } from '../types';
import { initTanksList } from '../utils';
import { fightStartReducer, setAttackerReducer, setDefenderReducer, fightReducer } from '../reducers';

export const useBattlingTanks = () => {

  // TODO
  const setAttacker = (player: PlayerInfo): void => {
    const payload: PlayerData = {
      ...player,
      role: 'attacker',
      tanksList: initTanksList(player.tanks),
      diceList: [0,0,0],
    };
    dispatch({ type: 'set-attacker', payload });
  };

  // TODO
  const setDefender = (player: PlayerInfo): void => {
    const payload: PlayerData = {
      ...player,
      role: 'defender',
      tanksList: initTanksList(player.tanks),
      diceList: [0,0,0],
    };
    dispatch({ type: 'set-defender', payload });
  };

  // TODO
  const fight = (): void => {
    dispatch({ type: 'fight-start', payload: null });
    setTimeout(() => dispatch({ type: 'fight', payload: null }), 500);
  };

  // TODO: Move to reducers
  const reducer_ = (state: State, action: Action): State => {
    switch (action.type) {
      case 'set-attacker':
        return setAttackerReducer(state, action);
      case 'set-defender':
        return setDefenderReducer(state, action);
      case 'fight-start':
        return fightStartReducer(state, action);
      case 'fight':
        return state;
        // return fightReducer(state, action);
      default:
        return state;
    }
  };

  // TODO
  const reducer = (state: State, action: Action): State => {
    console.log('---');
    console.log('PRE', action.type, state);
    const newState = reducer_(state, action);
    console.log('POST', action.type, newState);
    console.log('---');
    return newState;
  };

  // TODO: Move to initial state
  const [state, dispatch] = useReducer<Reducer<State, Action>>(reducer, {
    isRolling: false,
    attacker: null,
    defender: null,
  });

  return {
    state,
    setAttacker,
    setDefender,
    fight,
  };
};
