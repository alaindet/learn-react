import { PlayerData } from 'src/common/types';

export interface State {
  attacker: PlayerData | null;
  defender: PlayerData | null;
  isRolling: boolean;
}
