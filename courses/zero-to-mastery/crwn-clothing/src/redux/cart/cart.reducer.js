import { CartActionTypes } from './cart.types';
import { addItemToCart } from './cart.utils';

const INITIAL_STATE = {
  visible: false,
  items: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case CartActionTypes.ToggleVisibility:
      const visible = !state.visible;
      return {...state, visible};

    case CartActionTypes.AddItem:
      const item = action.payload;
      const items = addItemToCart(state.items, item);
      return {...state, items};

    default:
      return state;
  }
};
