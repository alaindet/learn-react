import React from 'react';

import { BuildControlsStyled } from './BuildControls.style';
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
      {controls.map(control => (
        <BuildControl
          key={control.label}
          label={control.label}
          addIngredient={() => props.addIngredient(control.type)}
          removeIngredient={() => props.removeIngredient(control.type)}
        />
      ))}
    </BuildControlsStyled>
  );
};

export default BuildControls;
