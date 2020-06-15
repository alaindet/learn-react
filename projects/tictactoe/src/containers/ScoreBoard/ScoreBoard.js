import React, { useContext } from 'react';

import GameContext from './../../context/game';

const ScoreBoard = () => {

  const gameContext = useContext(GameContext);

  return (
    <div className="ScoreBoard">
      ScoreBoard
    </div>
  );
};

export default ScoreBoard;
