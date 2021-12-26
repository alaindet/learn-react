import { AppFeature } from 'src/common/types';
import { Action, ActionType } from '../types';

export const setFeature = (payload: AppFeature): Action<AppFeature> => {
  return { type: ActionType.SetFeature, payload };
};
