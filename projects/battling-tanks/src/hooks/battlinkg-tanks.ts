import { Reducer, useReducer } from 'react';

import { PlayerRole, DieValue, PlayerColor, TankState } from 'src/common/types';
import { compareDescending, fill, randomInteger } from 'src/common/utils';

const MAX_VISIBLE_TANKS = 3;

export interface PlayerInfo {
  tanks: number;
  color: PlayerColor;
}

export interface PlayerData extends PlayerInfo {
  role: PlayerRole;
  tanksList: TankState[];
  diceList: DieValue[];
}

export interface State {
  attacker: PlayerData | null;
  defender: PlayerData | null;
  isRolling: boolean;
}

export interface Action<T = any> {
  type: string;
  payload: T;
}

const initTanksList = (tanks: number): TankState[] => {
  const enabledTanks = Math.min(tanks, MAX_VISIBLE_TANKS);
  const tanksListLength = Math.max(tanks, MAX_VISIBLE_TANKS);
  const tanksList = fill(tanksListLength, TankState.Disabled);
  for (let i = 0; i < enabledTanks; i++) {
    tanksList[i] = TankState.Enabled;
  }
  return tanksList;
};

const countEnabledTanks = (tanksList: TankState[]) => {
  return tanksList.filter(t => t === TankState.Enabled).length;
};

const rollDice = (n: number): DieValue[] => {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(randomInteger(1, 6));
  }
  result.sort(compareDescending);
  return [...result, 0, 0].slice(0, MAX_VISIBLE_TANKS) as DieValue[];
};

const setAttackerReducer = (state: State, action: Action<PlayerData>): State  => {
  return { ...state, attacker: action.payload };
};

const setDefenderReducer = (state: State, action: Action<PlayerData>): State => {
  return { ...state, defender: action.payload };
};

const fightStartReducer = (state: State, _: Action): State => {
  return { ...state, isRolling: true };
};

// const fightReducer = (state: State, _: Action): State => {
//   const attackingTanksList = state.attacker.tanksList;
//   const attackingTanksCount = countEnabledTanks(attackingTanksList);
//   const attackingDiceList = rollDice(attackingTanksCount);

//   const defendingTanksList = state.defender.tanksList;
//   const defendingTanksCount = countEnabledTanks(defendingTanksList);
//   const defendingDiceList = rollDice(defendingTanksCount);

//   for (let i = 0; i < MAX_VISIBLE_TANKS; i++) {
//     const att = attackingDiceList[i];
//     const def = defendingDiceList[i];

//     if (att === 0 || def === 0) {
//       attackingTanksList[i] = TankState.Disabled;
//       defendingTanksList[i] = TankState.Disabled;
//       continue;
//     }

//     if (att > def) {
//       attackingTanksList[i] = TankState.Winner;
//       defendingTanksList[i] = TankState.Loser;
//       continue;
//     }

//     attackingTanksList[i] = TankState.Loser;
//     defendingTanksList[i] = TankState.Winner;
//   }

//   return {
//     ...state,
//     isRolling: false,
//     attacker: {
//       ...(state.attacker ?? {}),
//       tanksList: [...attackingTanksList],
//       diceList: [...attackingDiceList],
//     },
//     defender: {
//       ...state.defender,
//       tanksList: [...defendingTanksList],
//       diceList: [...defendingDiceList],
//     },
//   };
// };

export const useBattlingTanks = () => {

  const setAttacker = (player: PlayerInfo): void => {
    const payload: PlayerData = {
      ...player,
      role: 'attacker',
      tanksList: initTanksList(player.tanks),
      diceList: [0,0,0],
    };
    dispatch({ type: 'set-attacker', payload });
  };

  const setDefender = (player: PlayerInfo): void => {
    const payload: PlayerData = {
      ...player,
      role: 'defender',
      tanksList: initTanksList(player.tanks),
      diceList: [0,0,0],
    };
    dispatch({ type: 'set-defender', payload });
  };

  const fight = (): void => {
    dispatch({ type: 'fight-start', payload: null });
    setTimeout(() => dispatch({ type: 'fight', payload: null }), 500);
  };

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
