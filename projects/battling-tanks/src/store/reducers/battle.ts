import { MAX_VISIBLE_TANKS } from 'src/common/data';
import { padArray } from 'src/common/utils';
import { Action, State } from '../types';
import { countEnabledTanks, rollDice, resolveBattle } from '../utils';

export const battleReducer = (state: State, _: Action): State => {

  if (!state?.attacker || !state?.defender) {
    return state;
  }

  const attackingTanksList = state.attacker.tanksList;
  const attackingTanksCount = countEnabledTanks(attackingTanksList);
  const attackingDiceList = padArray(rollDice(attackingTanksCount), MAX_VISIBLE_TANKS, 0);

  const defendingTanksList = state.defender.tanksList;
  const defendingTanksCount = countEnabledTanks(defendingTanksList);
  const defendingDiceList = padArray(rollDice(defendingTanksCount), MAX_VISIBLE_TANKS, 0);

  const { attackerTanks, defenderTanks, outcome } = resolveBattle(
    [attackingTanksList, attackingDiceList],
    [defendingTanksList, defendingDiceList]
  );

  return {
    ...state,
    battleOutcome: outcome,
    attacker: {
      ...state.attacker,
      tanksList: [...attackerTanks],
      diceList: [...attackingDiceList],
    },
    defender: {
      ...state.defender,
      tanksList: [...defenderTanks],
      diceList: [...defendingDiceList],
    },
  };
};
