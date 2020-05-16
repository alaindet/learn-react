const INITIAL_STATE = {
  isSignedIn: null
};

export default (state = INITIAL_STATE, action) => {

  if ('SIGN_IN' === action.type) {
    return { ...state, isSignedIn: true };
  }

  if ('SIGN_OUT' === action.type) {
    return { ...state, isSignedIn: false };
  }

  return state;
};
