import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case UserActionTypes.SET_CURRENT_USER:
      const currentUser = action.payload;
      return { ...state, currentUser };

    default:
      return state;
  }
};
