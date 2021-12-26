import { Action, ActionType } from '../types';

export const battle = (): Action<null> => {
  return { type: ActionType.Battle, payload: null };
};
