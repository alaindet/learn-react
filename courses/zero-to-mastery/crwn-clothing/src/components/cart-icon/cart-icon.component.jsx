import React from 'react';
import { connect } from 'react-redux';

import './cart-icon.style.scss';
import { toggleCartVisibility, selectCartItemsCount } from '../../redux';
import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg';

const CartIcon_ = (props) => {
  return (
    <div className="cart-icon" onClick={props.setVisible}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{props.count}</span>
    </div>
  );
};

const mapStateToProps = state => ({
  count: selectCartItemsCount(state),
});

const mapDispatchToProps = dispatch => ({
  setVisible: () => dispatch(toggleCartVisibility()),
});

export const CartIcon = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartIcon_);
