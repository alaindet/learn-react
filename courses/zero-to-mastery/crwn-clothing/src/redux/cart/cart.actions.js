import { CartActionTypes } from './cart.types';

export const toggleCartVisibility = () => ({
  type: CartActionTypes.ToggleVisibility,
});

export const addItemToCart = item => ({
  type: CartActionTypes.AddItem,
  payload: item,
});
