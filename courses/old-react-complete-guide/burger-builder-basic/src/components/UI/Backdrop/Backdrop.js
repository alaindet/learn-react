import React from 'react';

import { BackdropStyled } from './Backdrop.style';

const Backdrop = (props) => {
  return props.show ? <BackdropStyled onClick={props.onDismiss} /> : null;
};

export default Backdrop;
