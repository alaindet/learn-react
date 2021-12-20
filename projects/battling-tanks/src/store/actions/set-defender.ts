import { MAX_VISIBLE_TANKS } from 'src/common/data';
import { PlayerData, PlayerInfo, TankState } from 'src/common/types';
import { initTanksList } from '../utils';
import { Action, ActionType } from '../types';

export const setDefender = (player: PlayerInfo): Action<PlayerData> => {
  const tanksList = initTanksList(player.tanks);
  const diceList = tanksList.slice(0, MAX_VISIBLE_TANKS)
    .map(tank => tank === TankState.Enabled ? 0 : tank);

  return {
    type: ActionType.SetDefender,
    payload: {
      ...player,
      role: 'defender',
      tanksList,
      diceList,
    }
  };
};
