import { PlayerColor } from 'src/common/types';

export interface PlayersForm {
  attackerColor: PlayerColor;
  attackerTanks: number;
  defenderColor: PlayerColor;
  defenderTanks: number;
}
