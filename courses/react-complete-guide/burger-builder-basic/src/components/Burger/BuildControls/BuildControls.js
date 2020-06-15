import React from 'react';

import {
  BuildControlsStyled,
  CallToActionButton,
} from './BuildControls.style';
import BuildControl from './BuildControl/BuildControl'

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const BuildControls = (props) => {
  return (
    <BuildControlsStyled>

      <p>
        Total price:
        &nbsp;
        <strong>{props.totalPrice.toFixed(2)}</strong>$
      </p>

      {controls.map(control => (
        <BuildControl
          key={control.label}
          label={control.label}
          addIngredient={() => props.addIngredient(control.type)}
          removeIngredient={() => props.removeIngredient(control.type)}
          disabled={props.disabled[control.type]}
        />
      ))}

      <CallToActionButton disabled={!props.canBuy}>
        Order now
      </CallToActionButton>

    </BuildControlsStyled>
  );
};

export default BuildControls;
