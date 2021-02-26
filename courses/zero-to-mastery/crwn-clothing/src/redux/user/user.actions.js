import { UserActionTypes } from './user.types';

export const setCurrentUser = (currentUser) => ({
  type: UserActionTypes.SetCurrent,
  payload: currentUser,
});
