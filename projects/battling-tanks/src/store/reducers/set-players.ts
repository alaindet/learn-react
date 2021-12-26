import { PlayersForm } from 'src/common/types';
import { Action, State } from '../types';
import { initTanksList, tanksToDiceList } from '../utils';

export const setPlayersReducer = (state: State, action: Action<PlayersForm>): State => {
  const attackerTanksList = initTanksList(action.payload.attackerTanks);
  const attackerDiceList = tanksToDiceList(attackerTanksList);

  const defenderTanksList = initTanksList(action.payload.defenderTanks);
  const defenderDiceList = tanksToDiceList(defenderTanksList);

  return {
    ...state,
    attacker: {
      color: action.payload.attackerColor,
      tanks: action.payload.attackerTanks,
      tanksList: attackerTanksList,
      diceList: attackerDiceList,
    },
    defender: {
      color: action.payload.defenderColor,
      tanks: action.payload.defenderTanks,
      tanksList: defenderTanksList,
      diceList: defenderDiceList,
    },
  };
};
