import { FunctionComponent } from 'react';

import { Tank } from 'src/common/components';
import { PlayerColor, PlayerRole } from 'src/common/types';
import { fill } from 'src/common/utils';
import './PlayerBoardTanks.scss';

export interface PlayerBoardTanksProps {
  role: PlayerRole;
  color: PlayerColor;
  tanks: number;
  tankWidth?: string;
}

export const PlayerBoardTanks: FunctionComponent<PlayerBoardTanksProps> = ({
  role,
  color,
  tanks,
  tankWidth,
}) => {

  tankWidth = tankWidth ?? '6vw';

  const tanksShowing = Math.min(tanks, 3);
  const tanksList = fill(tanksShowing, 0);

  return (
    <div className="player-board__tanks">
      {tanksList.map((_, i) => (
        <Tank
          key={i}
          color={color}
          width={tankWidth}
          facing={role === 'attacker' ? 'up' : 'down'}
        />
      ))}
    </div>
  );
};
