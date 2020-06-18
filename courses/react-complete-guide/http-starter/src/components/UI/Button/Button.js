import React from 'react';

import { ButtonStyled } from './Button.style';

const Button = (props) => {
  return (
    <ButtonStyled
      onClick={props.onClick}
      disabled={props.disabled}
      color={props.color}
      size={props.size}
      uppercase={props.uppercase}
    >
      {props.children}
    </ButtonStyled>
  );
};

export default Button;
