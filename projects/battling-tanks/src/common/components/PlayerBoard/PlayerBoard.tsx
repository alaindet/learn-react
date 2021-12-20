import { FunctionComponent } from 'react';

import { PlayerBoardDice, PlayerBoardTanks, Button } from 'src/common/components';
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

  const controlsTemplate = (
    <div key="controls" className="player-board__controls">
      <Button fill="outline">Change</Button>
    </div>
  );

  return (
    <div className="player-board">
      {role === 'attacker'
        ? [diceTemplate, tanksTemplate, controlsTemplate]
        : [controlsTemplate, tanksTemplate, diceTemplate]}
    </div>
  );
};
