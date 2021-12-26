import { MAX_VISIBLE_TANKS } from 'src/common/data';
import { DieValue, TankState } from 'src/common/types';

export const tanksToDiceList = (tanksList: TankState[]): DieValue[] => {
  return tanksList
    .slice(0, MAX_VISIBLE_TANKS)
    .map(tank => tank === TankState.Enabled ? 0 : tank);
}
