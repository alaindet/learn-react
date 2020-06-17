import React from 'react';

import { ButtonGroupStyled } from './ButtonGroup.style';

const ButtonGroup = (props) => {
  return <ButtonGroupStyled>{props.children}</ButtonGroupStyled>;
};

export default ButtonGroup;
