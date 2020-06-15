import React from 'react';

const gameContext = React.createContext({
  board: ['', '', '', '', '', '', '', '', ''],
  players: { x: 0, o: 0 },
  player: '',
  turn: 0,
  nextTurn: () => {},
  putSignOnBoard: () => {},
  resetGame: () => {},
});

export default gameContext;
