import React from 'react';

import './cart-dropdown.style.scss';
import { Button } from '../button/button.component';

export const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        TODO: Show list of items here...
      </div>
      <Button outline>GO&nbsp;TO&nbsp;CHECKOUT</Button>
    </div>
  );
};
