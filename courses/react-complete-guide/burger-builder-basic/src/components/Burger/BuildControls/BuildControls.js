import React from 'react';

import { BuildControlsStyled } from './BuildControls.style';
import BuildControl from 'components/Burger/BuildControls/BuildControl/BuildControl'
import Button from 'components/UI/Button/Button';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const BuildControls = (props) => {

  return (
    <BuildControlsStyled>

      <p>Total price: <strong>{props.totalPrice.toFixed(2)}</strong>$</p>

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
