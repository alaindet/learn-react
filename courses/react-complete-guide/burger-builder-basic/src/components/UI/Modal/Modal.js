import React from 'react';

import { ModalStyled } from './Modal.style';
import Backdrop from 'components/UI/Backdrop/Backdrop';

const Modal = (props) => {

  const style = {
    transformOrigin: 'center',
    transform: props.show ? 'scale(1)' : 'scale(0)',
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
