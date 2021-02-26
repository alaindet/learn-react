import { CartActionTypes } from './cart.types';

const INITIAL_STATE = {
  visible: false,
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case CartActionTypes.ToggleVisibility:
      const visible = !state.visible;
      return { ...state, visible };

    default:
      return state;
  }
};
