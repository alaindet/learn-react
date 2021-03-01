import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  selectCart,
  cart => cart.items,
);

export const selectCartIsVisible = createSelector(
  selectCart,
  cart => cart.visible,
);

export const selectCartItemsCount = createSelector(
  selectCartItems,
  items => items.reduce(
    (total, item) => total += item.quantity,
    0
  ),
);

export const selectCartTotal = createSelector(
  selectCartItems,
  items => items.reduce(
    (total, item) => total += item.price * item.quantity,
    0
  ),
);
