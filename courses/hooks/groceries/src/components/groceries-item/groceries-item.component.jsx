import React from 'react';

import './groceries-item.css';

export const GroceriesItem = ({
  name,
  calories,
  onRemove,
}) => {
  return (
    <div className="groceries-item">

      <div className="item__info">
        <strong>{name}</strong>, {calories} calories
      </div>

      <div className="item__controls">
        <button onClick={() => onRemove(name)}>
          &times; Remove
        </button>
      </div>

    </div>
  );
};
