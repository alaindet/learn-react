import { useState } from 'react';

import { BattleField } from 'src/features/battle';
import { PlayersSelection } from 'src/features/selection';
import { BattlingTanksProvider } from 'src/context';
import './App.scss';

export const App = () => {
  // TODO: Routing would be better, I know
  const [isSelectingPlayers, setIsSelectingPlayers] = useState(true);

  const onSelectPlayers = () => {
    setIsSelectingPlayers(false);
  };

  const onChangePlayers = () => {
    setIsSelectingPlayers(true);
  };

  return (
    <BattlingTanksProvider>
      <div className="App">

        {isSelectingPlayers && (
          <PlayersSelection onSelectPlayers={onSelectPlayers} />
        )}

        {!isSelectingPlayers && (
          <BattleField onChangePlayers={onChangePlayers}/>
        )}

      </div>
    </BattlingTanksProvider>
  );
};
