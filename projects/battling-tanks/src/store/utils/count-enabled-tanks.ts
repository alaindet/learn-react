import { TankState } from 'src/common/types';

export const countEnabledTanks = (tanksList: TankState[]) => {
  return tanksList.filter(t => t === TankState.Enabled).length;
};
