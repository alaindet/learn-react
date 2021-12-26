import { Action, ActionType } from '../types';

export const battleStart = (): Action<null> => {
  return { type: ActionType.BattleStart, payload: null };
};
