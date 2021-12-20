import { Action, ActionType } from '../types';

export const fightEnd = (): Action<null> => {
  return { type: ActionType.FightEnd, payload: null };
};
