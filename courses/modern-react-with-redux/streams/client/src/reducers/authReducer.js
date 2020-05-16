import { SIGN_IN, SIGN_OUT } from './../actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
};

export default (state = INITIAL_STATE, action) => {

  if (SIGN_IN === action.type) {
    return { ...state, isSignedIn: true, userId: action.payload};
  }

  if (SIGN_OUT === action.type) {
    return { ...state, isSignedIn: false, userId: null };
  }

  return state;
};
