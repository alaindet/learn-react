import { MAX_VISIBLE_TANKS } from 'src/common/data';
import { TankState } from 'src/common/types';
import { fill } from 'src/common/utils';

export const initTanksList = (tanks: number): TankState[] => {
  const enabledTanks = Math.min(tanks, MAX_VISIBLE_TANKS);
  const tanksListLength = Math.max(tanks, MAX_VISIBLE_TANKS);
  const tanksList = fill(tanksListLength, TankState.Disabled);
  for (let i = 0; i < enabledTanks; i++) {
    tanksList[i] = TankState.Enabled;
  }
  return tanksList;
};
