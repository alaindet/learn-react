import { AppFeature } from 'src/common/types';
import { Action, State } from '../types';

export const setFeature = (state: State, action: Action<AppFeature>): State => {
  return { ...state, feature: action.payload };
};
