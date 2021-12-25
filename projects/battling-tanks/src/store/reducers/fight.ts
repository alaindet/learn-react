import { MAX_VISIBLE_TANKS } from 'src/common/data';
import { TankState } from 'src/common/types';
import { Action, State } from '../types';
import { countEnabledTanks, rollDice } from '../utils';

export const fightReducer = (state: State, _: Action): State => {

  if (!state?.attacker || !state?.defender) {
    return state;
  }

  const attackingTanksList = state.attacker.tanksList;
  const attackingTanksCount = countEnabledTanks(attackingTanksList);
  const attackingDiceList = rollDice(attackingTanksCount);

  const defendingTanksList = state.defender.tanksList;
  const defendingTanksCount = countEnabledTanks(defendingTanksList);
  const defendingDiceList = rollDice(defendingTanksCount);

  for (let i = 0; i < MAX_VISIBLE_TANKS; i++) {
    const att = attackingDiceList[i];
    const def = defendingDiceList[i];

    if (att === 0 || def === 0) {
      attackingTanksList[i] = TankState.Disabled;
      defendingTanksList[i] = TankState.Disabled;
      continue;
    }

    if (att > def) {
      attackingTanksList[i] = TankState.Winner;
      defendingTanksList[i] = TankState.Loser;
      continue;
    }

    attackingTanksList[i] = TankState.Loser;
    defendingTanksList[i] = TankState.Winner;
  }

  return {
    ...state,
    attacker: {
      ...state.attacker,
      tanksList: [...attackingTanksList],
      diceList: [...attackingDiceList],
    },
    defender: {
      ...state.defender,
      tanksList: [...defendingTanksList],
      diceList: [...defendingDiceList],
    },
  };
};
