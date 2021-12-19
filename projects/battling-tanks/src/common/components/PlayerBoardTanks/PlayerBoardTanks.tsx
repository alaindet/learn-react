import { FunctionComponent } from 'react';

import { Tank } from 'src/common/components';
import { PlayerColor, PlayerRole, TankState } from 'src/common/types';
import { fill } from 'src/common/utils';
import './PlayerBoardTanks.scss';

export interface PlayerBoardTanksProps {
  role: PlayerRole;
  color: PlayerColor;
  tanks: TankState[];
  tankWidth?: string;
  isShooting?: boolean;
}

export const PlayerBoardTanks: FunctionComponent<PlayerBoardTanksProps> = ({
  role,
  color,
  tanks,
  tankWidth,
  isShooting,
}) => {

  tankWidth = tankWidth ?? '6vw';
  isShooting = isShooting ?? false;

  const tanksShowing = Math.min(tanks.length, 3);
  const tanksList = fill(tanksShowing, 0);

  return (
    <div className="player-board__tanks">
      {tanksList.map((tank, i) => (
        <Tank
          key={i}
          color={color}
          width={tankWidth}
          facing={role === 'attacker' ? 'up' : 'down'}
          isShooting={isShooting}
          isDisabled={tank === TankState.Disabled}
        />
      ))}
    </div>
  );
};
