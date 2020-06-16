import React from 'react';

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
    </React.Fragment>
  );
};

export default OrderSummary;
