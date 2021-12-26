import { FunctionComponent } from 'react';
import classNames from 'classnames';

import { Outcome, PlayerColor } from 'src/common/types';
import './Arrows.scss';

export interface ArrowsProps {
  attackerColor: PlayerColor;
  defenderColor: PlayerColor;
  outcome: Outcome[];
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

        switch (winner) {
          case Outcome.Attacker:
            cssClasses.push(`--color-${attackerColor}`, '--facing-up');
            break;
          case Outcome.Defender:
            cssClasses.push(`--color-${defenderColor}`, '--facing-down');
            break;
          case Outcome.None:
          default:
            cssClasses.push('--disabled');
            break;
        }

        return <div key={i} className={classNames(cssClasses)}></div>;
      })}
    </div>
  );
};
