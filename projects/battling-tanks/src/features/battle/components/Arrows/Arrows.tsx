import { FunctionComponent } from 'react';
import classNames from 'classnames';

import { PlayerColor, PlayerRole } from 'src/common/types';
import './Arrows.scss';

export interface ArrowsProps {
  attackerColor: PlayerColor;
  defenderColor: PlayerColor;
  outcome: PlayerRole[];
}

export const Arrows: FunctionComponent<ArrowsProps> = ({
  attackerColor,
  defenderColor,
  outcome,
}) => {
  return (
    <div className="battlefield__arrows">
      {outcome.map((winner, i) => {

        const cssClasses = [
          'battlefield__arrow',
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
