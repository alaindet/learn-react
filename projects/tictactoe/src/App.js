import React from 'react';

import { Container } from './theme/layout';
import GameBoard from './containers/GameBoard/GameBoard';
import ScoreBoard from './containers/ScoreBoard/ScoreBoard';
import Controls from './containers/Controls/Controls';

const App = () => {
  return (
    <Container withPadding>
      <GameBoard />
      <ScoreBoard />
      <Controls />
    </Container>
  );
};

export default App;
