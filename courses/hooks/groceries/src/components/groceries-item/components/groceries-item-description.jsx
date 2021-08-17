import React from 'react';

export const GroceriesItemDescription = ({
  name,
  calories,
}) => {
  return (
    <ul className="item__info">
      <li>
        <strong>Name</strong>: {name}
      </li>
      <li>
        <strong>Calories</strong>: {calories}
      </li>
    </ul>
  );
};
