import { CartActionTypes } from './cart.types';

export const toggleCartVisibility = () => ({
  type: CartActionTypes.ToggleVisibility,
});

export const addItemToCart = item => ({
  type: CartActionTypes.AddItem,
  payload: item,
});

export const goToCheckout = () => ({
  type: CartActionTypes.GoToCheckout,
});
