import { PlayerData, TankState } from 'src/common/types';
import { initTanksList, tanksToDiceList } from '../utils';
import { Action, State } from '../types';

const cleanupPlayer = (player: PlayerData | null): PlayerData | null => {
  if (player === null) {
    return null;
  }

  let { tanks, tanksList, diceList } = player;
  const lostTanks = player.tanksList.filter(tank => tank === TankState.Loser).length;
  tanks -= lostTanks;
  tanksList = initTanksList(tanks);
  diceList = tanksToDiceList(tanksList);
  return { ...player, tanks, tanksList, diceList };
};

export const battleCleanupReducer = (state: State, _: Action): State => {
  return {
    ...state,
    battleOutcome: null,
    attacker: cleanupPlayer(state.attacker),
    defender: cleanupPlayer(state.defender),
  };
};
