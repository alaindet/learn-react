import { useState } from 'react';

import { PlayerBoard } from 'src/common/components';
import { PlayerColor, DieValue } from 'src/common/types';
import './App.scss';

export interface PlayerState {
  color: PlayerColor;
  tanks: number;
  dice?: DieValue[];
}

export const range = (n: number): number[] => {
  const range = [];
  while (n--) range.push(n);
  return range;
};

export const App = () => {

  const [attackingPlayer, setAttackingPlayer] = useState<PlayerState>({
    color: 'red',
    tanks: 3,
  });

  const [defendingPlayer, setDefendingPlayer] = useState<PlayerState>({
    color: 'blue',
    tanks: 3,
  });

  const [isRolling, setIsRolling] = useState(false);

  return (
    <div className="App">
      <div className="board">

        <PlayerBoard
          role="defender"
          color={defendingPlayer.color}
          tanks={defendingPlayer.tanks}
          isRolling={isRolling}
          dice={defendingPlayer.dice}
        />

        <hr />

        <PlayerBoard
          role="attacker"
          color={attackingPlayer.color}
          tanks={attackingPlayer.tanks}
          isRolling={isRolling}
          dice={attackingPlayer.dice}
        />

      </div>
    </div>
  );
};
