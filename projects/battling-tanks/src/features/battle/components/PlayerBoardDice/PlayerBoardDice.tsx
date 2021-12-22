import { FunctionComponent } from 'react';

import { Die } from 'src/common/components';
import { DISABLED_DIE } from 'src/common/data';
import { PlayerColor, DieValue } from 'src/common/types';
import './PlayerBoardDice.scss';

export interface PlayerBoardDiceProps {
  color: PlayerColor;
  dieWidth?: string;
  isRolling?: boolean;
  dice: DieValue[];
}

export const PlayerBoardDice: FunctionComponent<PlayerBoardDiceProps> = ({
  color,
  dice,
  dieWidth,
  isRolling,
}) => {
  console.log('PlayerBoardDice', color, dice); // TODO
  dieWidth = dieWidth ?? '6vw';
  isRolling = isRolling ?? false;

  return (
    <div className="player-board__dice">
      {dice.map((value, i) => (
        <Die
          key={i}
          color={color}
          width={dieWidth}
          value={value}
          isRolling={isRolling}
          isDisabled={value === DISABLED_DIE}
        />
      ))}
    </div>
  );
};
