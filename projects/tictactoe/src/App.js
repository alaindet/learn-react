import React, { useState } from 'react';

import { Container } from './theme/layout';
import GameBoard from './containers/GameBoard/GameBoard';
import ScoreBoard from './containers/ScoreBoard/ScoreBoard';
import Controls from './containers/Controls/Controls';

const INITIAL_GAME_BOARD = ['', '', '', '', '', '', '', '', ''];

const App = () => {

  const [board, setBoard] = useState(INITIAL_GAME_BOARD);
  const [turn, setTurn] = useState(0);
  const [player, setPlayer] = useState('x');
  const [score, setScore] = useState({ x: 0, o: 0 });

  const areTheseCellsAllEqualTo = (indices, sign) => {
    let areEqual = true;
    for (const index of indices) {
      areEqual = areEqual && board[index] === sign;
    }
    return areEqual;
  };

  const didAnyoneWin = () => {

    // By row
    if (
      areTheseCellsAllEqualTo([0, 1, 2], player) ||
      areTheseCellsAllEqualTo([3, 4, 5], player) ||
      areTheseCellsAllEqualTo([6, 7, 8], player)
    ) {
      return true;
    }

    // By column (TODO)
    if (
      areTheseCellsAllEqualTo([0, 3, 6], player) ||
      areTheseCellsAllEqualTo([1, 4, 7], player) ||
      areTheseCellsAllEqualTo([2, 5, 8], player)
    ) {
      return true;
    }

    // By diagonal (TODO)
    if (
      // areTheseCellsAllEqualTo([0, 1, 2], player) ||
      // areTheseCellsAllEqualTo([3, 4, 5], player) ||
      // areTheseCellsAllEqualTo([6, 7, 8], player)
    ) {
      return true;
    }

    // No one won
    return false;
  };

  const nextTurn = () => {
    if (didAnyoneWin()) {
      return;
    }
    setTurn(turn + 1);
    setPlayer(player === 'x' ? 'o' : 'x');
  };

  const putSignOnBoard = (index, sign) => {
    const newBoard = [...board];
    newBoard[index] = sign;
    setBoard(newBoard);
  };

  return (
    <Container withPadding withShadow>
      <GameBoard cells={cells}/>
      <ScoreBoard />
      <Controls />
    </Container>
  );
};

export default App;
