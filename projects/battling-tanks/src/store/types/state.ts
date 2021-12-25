import { PlayerData } from 'src/common/types';
import { AppFeature } from 'src/common/types/feature';

export interface State {
  feature: AppFeature;
  attacker: PlayerData | null;
  defender: PlayerData | null;
  isRolling: boolean;
}
