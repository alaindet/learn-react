import React from 'react';

import { ModalStyled } from './Modal.style';
import Backdrop from 'components/UI/Backdrop/Backdrop';

const Modal = (props) => {

  return (
    <React.Fragment>
      <Backdrop show={props.show} onDismiss={props.onDismiss} />
      <ModalStyled show={props.show}>{props.children}</ModalStyled>
    </React.Fragment>
  );
};

export default Modal;
