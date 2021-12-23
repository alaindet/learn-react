import { MAX_VISIBLE_TANKS } from 'src/common/data';
import { PlayerData, PlayerInfo, TankState } from 'src/common/types';
import { initTanksList } from '../utils';
import { Action, ActionType } from '../types';

// TODO
export const setPlayers = (payload: any): any => {
  return {
    type: ActionType.SetPlayers,
    payload,
  };
};

// export const setAttacker = (player: PlayerInfo): Action<PlayerData> => {
//   const tanksList = initTanksList(player.tanks);
//   const diceList = tanksList.slice(0, MAX_VISIBLE_TANKS)
//     .map(tank => tank === TankState.Enabled ? 0 : tank);

//   return {
//     type: ActionType.SetAttacker,
//     payload: {
//       ...player,
//       role: 'attacker',
//       tanksList,
//       diceList,
//     }
//   };
// };

// export const setDefender = (player: PlayerInfo): Action<PlayerData> => {
//   const tanksList = initTanksList(player.tanks);
//   const diceList = tanksList.slice(0, MAX_VISIBLE_TANKS)
//     .map(tank => tank === TankState.Enabled ? 0 : tank);

//   return {
//     type: ActionType.SetDefender,
//     payload: {
//       ...player,
//       role: 'defender',
//       tanksList,
//       diceList,
//     }
//   };
// };
