import React, { useContext } from 'react';

import { CellStyled } from './Cell.style';
import GameContext from './../../context/game';

const Cell = (props) => {

  const gameContext = useContext(GameContext);

  return (
    <CellStyled index={props.index} sign={props.sign}>
      {props.sign.toUpperCase()}
    </CellStyled>
  );
};

export default Cell;
