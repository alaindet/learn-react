import { useState } from 'react';

import { BattleField } from 'src/features/battle';
import { PlayerSelection } from 'src/features/selection';
import { BattlingTanksProvider } from 'src/context';
import './App.scss';

export const App = () => {
  // TODO: Routing would be better, I know
  const [isSelectingPlayers, setIsSelectingPlayers] = useState(false);

  const onSelectPlayers = () => {
    setIsSelectingPlayers(false);
  };

  const onChangePlayers = () => {
    setIsSelectingPlayers(true);
  };

  return (
    <BattlingTanksProvider>
      {isSelectingPlayers && <PlayerSelection onSelectPlayers={onSelectPlayers} />}
      {!isSelectingPlayers && <BattleField onChangePlayers={onChangePlayers}/>}
    </BattlingTanksProvider>
  );
};
