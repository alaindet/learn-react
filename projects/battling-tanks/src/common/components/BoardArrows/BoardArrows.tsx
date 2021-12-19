import { FunctionComponent } from 'react';
import classNames from 'classnames';

import { PlayerColor, PlayerRole } from 'src/common/types';
import './BoardArrows.scss';

export interface BoardArrowsProps {
  attackerColor: PlayerColor;
  defenderColor: PlayerColor;
  outcome: PlayerRole[];
}

export const BoardArrows: FunctionComponent<BoardArrowsProps> = ({
  attackerColor,
  defenderColor,
  outcome,
}) => {
  return (
    <div className="board__arrows">
      {outcome.map((winner, i) => {

        const cssClasses = [
          'board__arrow',
        ];

        if (winner === 'attacker') {
          cssClasses.push(`--color-${attackerColor}`, `--facing-up`);
        } else {
          cssClasses.push(`--color-${defenderColor}`, `--facing-down`);
        }

        return <div key={i} className={classNames(cssClasses)}></div>;
      })}
    </div>
  );
};
