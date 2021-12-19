import { useState, useRef } from 'react';

import { PlayerBoard } from 'src/common/components';
import { PlayerColor, DieValue, PlayerRole } from 'src/common/types';
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

  const fightingTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [attackingPlayer, setAttackingPlayer] = useState<PlayerState>({
    color: 'red',
    tanks: 3,
  });

  const [defendingPlayer, setDefendingPlayer] = useState<PlayerState>({
    color: 'blue',
    tanks: 3,
  });

  const [isRolling, setIsRolling] = useState(false);

  const [outcome, setOutcome] = useState<PlayerRole[] | null>(null);

  const rollDice = (n: number): DieValue[] => {
    let result = [];
    for (let i = 0; i < n; i++) {
      result.push(randomInteger(1, 6));
    }
    return result.sort(compareDescending) as DieValue[];
  };

  const onFight = () => {
    if (fightingTimeout.current) {
      clearTimeout(fightingTimeout.current);
    }

    setIsRolling(true);
    fightingTimeout.current = setTimeout(() => {
      const attackingDice = rollDice(attackingPlayer.tanks);
      const defendingDice = rollDice(defendingPlayer.tanks);

      let result: PlayerRole[] = [];
      for (let i = 0; i < attackingDice.length; i++) {
        const attacking = attackingDice[i];
        const defending = defendingDice[i];
        result.push(compareDice(attacking, defending));
      }
      setOutcome(result);

      setAttackingPlayer({...attackingPlayer, dice: attackingDice });
      setDefendingPlayer({...defendingPlayer, dice: defendingDice });
      setIsRolling(false);
    }, 500);
  };

  const compareDice = (attacking: number, defending: number): PlayerRole => {
    return (attacking > defending ? 'attacker' : 'defender') as PlayerRole;
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

      <div className="outcome">
        <ul>
          {outcome?.length && outcome.map((winning, i) => (
            <li key={i}>{winning}</li>
          ))}
        </ul>
      </div>

      <div className="controls">
        <button onClick={onFight}>Fight!</button>
      </div>

    </div>
  );
};
