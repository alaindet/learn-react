import { Action, ActionType } from '../types';

export const battleEnd = (): Action<null> => {
  return { type: ActionType.BattleEnd, payload: null };
};
