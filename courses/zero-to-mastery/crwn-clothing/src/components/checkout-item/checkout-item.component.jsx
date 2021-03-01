import React from 'react';

import './checkout-item.style.scss';

const ItemAction = ({ name, children, handler }) => {
  return (
    <button className={`action action-${name}`} onClick={handler}>
      {children}
    </button>
  );
};

export const CheckoutItem = (props) => {

  const { imageUrl, name, quantity, price } = props.item;

  const onIncrementQuantity = () => {
    // TODO
    console.log('onIncrementQuantity');
  };

  const onDecrementQuantity = () => {
    // TODO
    console.log('onDecrementQuantity');
  };

  const onRemove = () => {
    // TODO
    console.log('onRemove');
  };

  return (
    <div className="checkout-item">
      <div className="col image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="col name">{name}</div>
      <div className="col quantity">{quantity}</div>
      <div className="col price">${price}</div>
      <div className="col actions">
        <ItemAction name="increment" handler={onIncrementQuantity}>
          +
        </ItemAction>
        <ItemAction name="decrement" handler={onDecrementQuantity}>
          -
        </ItemAction>
        <ItemAction name="remove" handler={onRemove}>
          &times;
        </ItemAction>
      </div>
    </div>
  );
};
