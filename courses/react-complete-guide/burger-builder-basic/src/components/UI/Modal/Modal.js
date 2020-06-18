import React from 'react';

import { ModalStyled } from './Modal.style';
import Backdrop from 'components/UI/Backdrop/Backdrop';

const Modal = (props) => {

  return (
    <React.Fragment>
      <ModalStyled show={props.show}>{props.children}</ModalStyled>
      <Backdrop show={props.show} onDismiss={props.onDismiss} />
    </React.Fragment>
  );
};

export default React.memo(Modal);
