import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './cart-items.style.scss';
import { CartItem } from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux';

const CartItems_ = (props) => {

  if (!props.items.length) {
    return (
      <span className="empty-message">
        Your cart is empty
      </span>
    );
  }

  return (
    <>
      {props.items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
});

export const CartItems = connect(
  mapStateToProps,
)(CartItems_);
