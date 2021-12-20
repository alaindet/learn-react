import { Action, ActionType } from '../types';

export const fightStart = (): Action<null> => {
  return { type: ActionType.FightStart, payload: null };
};
