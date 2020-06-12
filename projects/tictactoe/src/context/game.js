import React from 'react';

const gameContext = React.createContext({
  board: ['', '', '', '', '', '', '', '', ''],
  currentTurn: 0,
  currentPlayer: '',
  players: { x: 0, o: 0 },
  nextTurn: () => {},
  putSignOnBoard: () => {},
});

export default gameContext;
