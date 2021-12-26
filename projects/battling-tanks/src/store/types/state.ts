import { Outcome, PlayerData } from 'src/common/types';
import { AppFeature } from 'src/common/types/feature';

export interface State {
  feature: AppFeature;
  battleOutcome: Outcome[] | null;
  attacker: PlayerData | null;
  defender: PlayerData | null;
  isRolling: boolean;
}
