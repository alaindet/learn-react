import { PlayerColor } from './player-color';
import { PlayerRole } from './player-role';
import { TankState } from './tank-state';
import { DieValue } from './die-value';

export interface PlayerInfo {
  tanks: number;
  color: PlayerColor;
}

export interface PlayerData extends PlayerInfo {
  role: PlayerRole;
  tanksList: TankState[];
  diceList: DieValue[];
}
