import { PlayerColor } from './player-color';
import { TankState } from './tank-state';
import { DieValue } from './die-value';

export interface PlayerInfo {
  tanks: number;
  color: PlayerColor;
}

export interface PlayerData extends PlayerInfo {
  tanksList: TankState[];
  diceList: DieValue[];
}
