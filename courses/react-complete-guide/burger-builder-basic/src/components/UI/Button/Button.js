import React from 'react';

import { ButtonStyled } from './Button.style';

const Button = (props) => {
  return (
    <ButtonStyled
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </ButtonStyled>
  );
};

export default Button;
