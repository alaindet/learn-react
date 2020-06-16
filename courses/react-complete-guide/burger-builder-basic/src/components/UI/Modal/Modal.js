import React from 'react';

import { ModalStyled } from './Modal.style';
import Backdrop from 'components/UI/Backdrop/Backdrop';

const Modal = (props) => {

  const style = {
    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
  };

  return (
    <React.Fragment>
      <Backdrop show={props.show} onDismiss={props.onDismiss} />
      <ModalStyled style={style}>
        {props.children}
      </ModalStyled>
    </React.Fragment>
  );
};

export default Modal;
