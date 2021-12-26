import { Action, ActionType } from '../types';

export const battleCleanup = (): Action<null> => {
  return { type: ActionType.BattleCleanup, payload: null };
};
