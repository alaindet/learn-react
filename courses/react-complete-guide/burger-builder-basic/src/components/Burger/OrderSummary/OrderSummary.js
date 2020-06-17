import React from 'react';

import Button from 'components/UI/Button/Button';
import ButtonGroup from 'components/UI/Button/ButtonGroup/ButtonGroup';

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

      {ingredientsList}

      <p>Total price: <strong>{props.totalPrice.toFixed(2)}</strong>$</p>

      <ButtonGroup>
        <Button type="secondary" onClick={props.onCancel}>
          Cancel
        </Button>
        <Button type="primary" onClick={props.onContinue}>
          Continue
        </Button>
      </ButtonGroup>

    </React.Fragment>
  );
};

export default OrderSummary;
