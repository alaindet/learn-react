import React from 'react';

import { BuildControlStyled, ControlLabel } from './BuildControl.style';
import Button from 'components/UI/Button/Button';

const BuildControl = (props) => {
  return (
    <BuildControlStyled>

      <ControlLabel>{props.label}</ControlLabel>

      <Button
        size="small"
        onClick={props.removeIngredient}
        disabled={props.disabled}
      >Less</Button>

      <Button
        size="small"
        onClick={props.addIngredient}
      >More</Button>

    </BuildControlStyled>
  );
};

export default BuildControl;
