import React from 'react';

import Button from 'components/UI/Button/Button';

const OrderSummary = (props) => {

  const ingredients = [];
  for (const _name in props.ingredients) {
    const amount = props.ingredients[_name];
    if (amount > 0) {
      const name = _name[0].toUpperCase() + _name.slice(1);
      ingredients.push({ name, amount });
    }
  }

  const ingredientsList = (
    <ul>
      {ingredients.map((ingredient, index) => (
        <li key={index}>
          {ingredient.amount}x {ingredient.name}
        </li>
      ))}
    </ul>
  );

  return (
    <React.Fragment>
      <h3>Your order</h3>
      <p>You selected these ingredients:</p>
      {ingredientsList}
      <Button onClick={() => {}} disabled={false}>Cancel</Button>
      <Button onClick={() => {}} disabled={false}>Continue</Button>
    </React.Fragment>
  );
};

export default OrderSummary;
