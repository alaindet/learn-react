import { MAX_VISIBLE_TANKS } from 'src/common/data';
import { DieValue, PlayersForm, TankState } from 'src/common/types';
import { Action, State } from '../types';
import { initTanksList } from '../utils';

const tanksToDiceList = (tanksList: TankState[]): DieValue[] => {
  return tanksList
    .slice(0, MAX_VISIBLE_TANKS)
    .map(tank => tank === TankState.Enabled ? 0 : tank);
}

export const setPlayersReducer = (state: State, action: Action<PlayersForm>): State => {

  const attackerTanksList = initTanksList(action.payload.attackerTanks);
  const attackerDiceList = tanksToDiceList(attackerTanksList);

  const defenderTanksList = initTanksList(action.payload.attackerTanks);
  const defenderDiceList = tanksToDiceList(attackerTanksList);

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
