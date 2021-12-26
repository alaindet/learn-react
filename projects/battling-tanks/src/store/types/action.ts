import { ActionType } from './action-type';

export interface Action<T = any> {
  type: ActionType;
  payload: T;
}
