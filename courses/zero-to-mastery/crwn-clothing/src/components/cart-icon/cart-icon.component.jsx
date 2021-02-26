import React from 'react';

import './cart-icon.style.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg';

export const CartIcon = () => {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};
