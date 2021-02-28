import React from 'react';
import { connect } from 'react-redux';

import './cart-dropdown.style.scss';
import { Button } from '../button/button.component';
import { CartItem } from '../cart-item/cart-item.component';

const CartDropdown_ = (props) => {

  const { items } = props;

  console.log('items', items);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <Button outline>GO&nbsp;TO&nbsp;CHECKOUT</Button>
    </div>
  );
};

const mapStateToProps = state => ({
  items: state.cart.items,
});

export const CartDropdown = connect(
  mapStateToProps,
)(CartDropdown_);
