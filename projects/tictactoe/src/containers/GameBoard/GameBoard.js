import React, { useContext } from 'react';

import { GameBoardStyled } from './GameBoard.style';
import GameContext from './../../context/game';
import Cell from './../../components/Cell/Cell';

const GameBoard = () => {

  const gameContext = useContext(GameContext);

  return (
    <GameBoardStyled>
      {gameContext.board.map((sign, index) => (
        <Cell key={index} index={index} sign={sign} />
      ))}
    </GameBoardStyled>
  );
};

export default GameBoard;
