import React from 'react';
import { connect } from 'react-redux';

import './checkout-item.style.scss';
import { removeItemFromCart, addItemToCart } from '../../redux';

const CheckoutItem_ = (props) => {

  const { imageUrl, name, quantity, price } = props.item;

  const onAdd = () => props.addItemToCart(props.item);
  const onRemove = () => props.removeItemFromCart(props.item);
  const onRemoveAll = () => console.log('onRemoveAll', props.item); // TODO

  return (
    <div className="checkout-item">
      <div className="col image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="col name">{name}</div>
      <div className="col quantity">{quantity}</div>
      <div className="col price">${price}</div>
      <div className="col actions">
        <button className="action" onClick={onAdd}>+</button>
        <button className="action" onClick={onRemove}>-</button>
        <button className="action" onClick={onRemoveAll}>&times;</button>
      </div>
    </div>
  );
};

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  removeItemFromCart: item => dispatch(removeItemFromCart(item)),
  addItemToCart: item => dispatch(addItemToCart(item)),
});

export const CheckoutItem = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CheckoutItem_);
