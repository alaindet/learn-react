import React from 'react';

import { BuildControlsStyled } from './BuildControls.style';
import BuildControl from './BuildControl/BuildControl'
import Button from './../../UI/Button/Button';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const BuildControls = (props) => {

  let totalPrice = props.totalPrice.toFixed(2);
  if (totalPrice < 0) {
    totalPrice = 0;
  }

  return (
    <BuildControlsStyled>

      <p>Total price: <strong>{totalPrice}</strong>$</p>

      {controls.map(control => (
        <BuildControl
          key={control.label}
          label={control.label}
          addIngredient={() => props.addIngredient(control.type)}
          removeIngredient={() => props.removeIngredient(control.type)}
          disabled={props.disabled[control.type]}
        />
      ))}

      <Button
        size="large"
        type="primary"
        uppercase={true}
        disabled={!props.canBuy}
        onClick={props.onOrder}
      >
        Order now
      </Button>

    </BuildControlsStyled>
  );
};

export default BuildControls;
