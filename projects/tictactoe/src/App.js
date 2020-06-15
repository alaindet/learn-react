import React, { useState } from 'react';

import { Container } from './theme/layout';
import GameBoard from './containers/GameBoard/GameBoard';
import ScoreBoard from './containers/ScoreBoard/ScoreBoard';
import Controls from './containers/Controls/Controls';
import GameContext from './context/game';

const INITIALIZE = {
  BOARD: ['x', 'x', 'o', 'o', 'x', '', '', '', ''],
  PLAYER: 'x',
  SCORE: { x: 0, o: 0 },
};

const areTheseCellsAllEqualTo = (indices, board, sign) => {
  for (const index of indices) {
    if (board[index] !== sign) {
      return false;
    }
  }
  return true;
};

const App = () => {

  const [board, setBoard] = useState(INITIALIZE.BOARD);
  const [turn, setTurn] = useState(0);
  const [player, setPlayer] = useState(INITIALIZE.PLAYER);
  const [score, setScore] = useState(INITIALIZE.SCORE);

  const putSignOnBoard = (index, sign) => {
    const newBoard = [...board];
    newBoard[index] = sign;
    setBoard(newBoard);
  };

  const didAnyoneWin = () => {

    // By row
    if (
      areTheseCellsAllEqualTo([0, 1, 2], board, player) ||
      areTheseCellsAllEqualTo([3, 4, 5], board, player) ||
      areTheseCellsAllEqualTo([6, 7, 8], board, player)
    ) {
      return true;
    }

    // By column (TODO)
    if (
      areTheseCellsAllEqualTo([0, 3, 6], board, player) ||
      areTheseCellsAllEqualTo([1, 4, 7], board, player) ||
      areTheseCellsAllEqualTo([2, 5, 8], board, player)
    ) {
      return true;
    }

    // By diagonal (TODO)
    if (
      areTheseCellsAllEqualTo([0, 4, 8], board, player) ||
      areTheseCellsAllEqualTo([2, 4, 6], board, player)
    ) {
      return true;
    }

    // No one won
    return false;
  };

  const nextTurn = () => {
    if (didAnyoneWin()) {
      setScore({ ...score, [player]: score[player] + 1 });
      setTurn(0);
      setPlayer(player === 'x' ? 'o' : 'x');
    } else {
      setTurn(turn + 1);
      setPlayer(player === 'x' ? 'o' : 'x');  
      putSignOnBoard(0, player);
    }
  };

  const resetGame = () => {
    setBoard(INITIALIZE.BOARD);
    setTurn(0);
    setPlayer(INITIALIZE.PLAYER);
    setScore(INITIALIZE.SCORE);
  };

  const gameContextValue = {
    players: { x: 0, y: 0 },
    player,
    board,
    turn,
    nextTurn,
    putSignOnBoard,
    resetGame,
  };

  return (
    <GameContext.Provider value={gameContextValue}>
      <Container withPadding withShadow>
        <GameBoard />
        <ScoreBoard />
        <Controls />
      </Container>
    </GameContext.Provider>
  );
};

export default App;
