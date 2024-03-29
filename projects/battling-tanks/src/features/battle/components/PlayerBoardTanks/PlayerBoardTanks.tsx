import { FunctionComponent } from 'react';

import { Tank } from 'src/common/components';
import { PlayerColor, PlayerRole, TankState } from 'src/common/types';
import { MAX_VISIBLE_TANKS } from 'src/common/data';
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

  const visibleTanks = tanks.slice(0, MAX_VISIBLE_TANKS);
  const additionalTanks = tanks.length - visibleTanks.length;

  return (
    <div className="player-board__tanks">
      {visibleTanks.map((tank, i) => (
        <Tank
          key={i}
          color={color}
          width={tankWidth}
          facing={role === 'attacker' ? 'up' : 'down'}
          isShooting={tank === TankState.Enabled && isShooting}
          isDisabled={tank === TankState.Disabled}
          isDestroyed={tank === TankState.Loser}
        />
      ))}
      {additionalTanks > 0 && (
        <div className="tanks__additional">
          + {additionalTanks}
        </div>
      )}
    </div>
  );
};
