import React from 'react';

import {
  BuildControlStyled,
  BuildControlLabel,
  BuildControlButton,
} from './BuildControl.style';

const BuildControl = (props) => {
  return (
    <BuildControlStyled>

      <BuildControlLabel>{props.label}</BuildControlLabel>

      <BuildControlButton
        type="less"
        onClick={props.removeIngredient}
      >Less</BuildControlButton>

      <BuildControlButton
        type="more"
        onClick={props.addIngredient}
      >More</BuildControlButton>

    </BuildControlStyled>
  );
};

export default BuildControl;
