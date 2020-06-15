import React from 'react';

import { ModalStyled } from './Modal.style';

const Modal = (props) => {
  return (
    <ModalStyled>
      {props.children}
    </ModalStyled>
  );
};

export default Modal;
