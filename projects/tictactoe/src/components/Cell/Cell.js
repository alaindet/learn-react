import React from 'react';

import { CellStyled } from './Cell.style';

const Cell = (props) => {
  return (
    <CellStyled index={props.index} sign={props.sign}>
      {props.sign.toUpperCase()}
    </CellStyled>
  );
};

export default Cell;
