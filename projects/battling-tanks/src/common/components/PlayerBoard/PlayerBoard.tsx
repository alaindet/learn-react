import { FunctionComponent } from 'react';

import { PlayerBoardDice, PlayerBoardTanks } from 'src/common/components';
import { PlayerColor, PlayerRole, DieValue } from 'src/common/types';
import { fill } from 'src/common/utils';
import './PlayerBoard.scss';

export interface PlayerBoardProps {
  role: PlayerRole;
  color: PlayerColor;
  tanks: number;
  tankWidth?: string;
  dieWidth?: string;
  isRolling?: boolean;
  dice?: DieValue[];
}

export const PlayerBoard: FunctionComponent<PlayerBoardProps> = ({
  role,
  color,
  tanks,
  dice,
  tankWidth,
  dieWidth,
  isRolling,
}) => {

  isRolling = isRolling ?? false;
  dice = dice ?? (fill(Math.min(tanks, 3), 0) as DieValue[]);

  const tanksTemplate = (
    <PlayerBoardTanks
      key="tanks"
      role={role}
      color={color}
      tanks={tanks}
      tankWidth={tankWidth}
    />
  );

  const diceTemplate = (
    <PlayerBoardDice
      key="dice"
      color={color}
      dice={dice}
      dieWidth={dieWidth}
      isRolling={isRolling}
    />
  );

  return (
    <div className="player-board">
      {role === 'attacker'
        ? [diceTemplate, tanksTemplate]
        : [tanksTemplate, diceTemplate]}
    </div>
  );
};
