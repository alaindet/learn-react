import { Outcome } from './outcome';
import { TankState } from './tank-state';

export interface BattleResolution {
  attackerTanks: TankState[];
  defenderTanks: TankState[];
  outcome: Outcome[];
}
