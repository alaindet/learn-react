import { UserActionTypes } from './user.types';

export const setCurrentUser = (currentUser) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: currentUser,
});
