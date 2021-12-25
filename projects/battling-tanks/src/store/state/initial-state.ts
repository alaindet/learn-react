import { AppFeature } from 'src/common/types';
import { State } from '../types';

export const INITIAL_STATE: State = {
  feature: AppFeature.Selection,
  isRolling: false,
  attacker: null,
  defender: null,
};
