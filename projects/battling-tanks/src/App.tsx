import { useState } from 'react';

import { Tank, Die } from 'src/common/components';
import { PlayerColor } from 'src/common/types';
import './App.scss';

export interface PlayerState {
  color: PlayerColor;
  tanks: number;
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

  return (
    <div className="App">
      <div className="board">

        <div className="player --defending">
          <div className="player__tanks">
            {range(defendingPlayer.tanks).map(i => (
              <Tank key={i} color={defendingPlayer.color} width="6vw" facing="down" />
            ))}
          </div>
          <div className="player__dice">
            {range(Math.min(defendingPlayer.tanks, 3)).map(i => (
              <Die key={i} color={defendingPlayer.color} width="6vw" value={6} />
            ))}
          </div>
        </div>

        <hr />

        <div className="player --attacking">
          <div className="player__dice">
            {range(Math.min(attackingPlayer.tanks, 3)).map(i => (
              <Die key={i} color={attackingPlayer.color} width="6vw" value={6} />
            ))}
          </div>
          <div className="player__tanks">
            {range(attackingPlayer.tanks).map(i => (
              <Tank key={i} color={attackingPlayer.color} width="6vw" facing="up" />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
