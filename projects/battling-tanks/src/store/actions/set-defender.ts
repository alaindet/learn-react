import { DISABLED_DIE } from 'src/common/data';
import { PlayerData, PlayerInfo } from 'src/common/types';
import { initTanksList } from '../utils';
import { Action, ActionType } from '../types';

export const setDefender = (player: PlayerInfo): Action<PlayerData> => {
  return {
    type: ActionType.SetDefender,
    payload: {
      ...player,
      role: 'defender',
      tanksList: initTanksList(player.tanks),
      diceList: [DISABLED_DIE, DISABLED_DIE, DISABLED_DIE],
    }
  };
};
