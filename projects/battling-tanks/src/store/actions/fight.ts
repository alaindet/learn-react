import { Action, ActionType } from '../types';

export const fight = (): Action<null> => {
  return { type: ActionType.Fight, payload: null };
};
