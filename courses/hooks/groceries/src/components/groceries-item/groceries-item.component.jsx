import React from 'react';

import './groceries-item.css';

export const GroceriesItem = ({ name, calories }) => {
  return (
    <div className="groceries-item">
      <strong>{name}</strong>, {calories} calories
    </div>
  );
};
