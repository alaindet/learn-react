import { FunctionComponent } from 'react';

import { PlayerBoardDice } from '../PlayerBoardDice/PlayerBoardDice';
import { PlayerBoardTanks } from '../PlayerBoardTanks/PlayerBoardTanks';
import { PlayerColor, PlayerRole, DieValue, TankState } from 'src/common/types';
import './PlayerBoard.scss';

export interface PlayerBoardProps {
  role: PlayerRole;
  color: PlayerColor;
  tanks: TankState[];
  tankWidth?: string;
  dieWidth?: string;
  isRolling: boolean;
  dice: DieValue[];
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
  const tanksTemplate = (
    <PlayerBoardTanks
      key="tanks"
      role={role}
      color={color}
      tanks={tanks}
      tankWidth={tankWidth}
      isShooting={isRolling}
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
