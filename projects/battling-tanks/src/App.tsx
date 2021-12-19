import { useState } from 'react';

import { PlayerBoard } from 'src/common/components';
import { PlayerColor, DieValue } from 'src/common/types';
import { randomInteger, compareDescending } from 'src/common/utils';
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

  const rollDice = (n: number): DieValue[] => {
    let result = [];
    for (let i = 0; i < n; i++) {
      result.push(randomInteger(1, 6));
    }
    return result.sort(compareDescending) as DieValue[];
  };

  const onFight = () => {
    setIsRolling(true);
    setTimeout(() => {
      const attackingDice = rollDice(attackingPlayer.tanks);
      setAttackingPlayer({...attackingPlayer, dice: attackingDice });

      const defendingDice = rollDice(defendingPlayer.tanks);
      setDefendingPlayer({...defendingPlayer, dice: defendingDice });
      setIsRolling(false);
    }, 1000);
  };

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

      <div className="controls">
        <button onClick={onFight}>Fight!</button>
      </div>

    </div>
  );
};
