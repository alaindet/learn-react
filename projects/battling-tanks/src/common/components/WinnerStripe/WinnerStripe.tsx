import { FunctionComponent } from 'react';
import classNames from 'classnames';

import { PlayerColor } from 'src/common/types';
import './WinnerStripe.scss';

export interface WinnerStripeProps {
  color: PlayerColor;
}

export const WinnerStripe: FunctionComponent<WinnerStripeProps> = ({
  color
}) => {
  const cssClasses = [
    'winner-stripe',
    `--color-${color}`,
  ];

  const colorName = color[0].toUpperCase() + color.slice(1);

  return (
    <div className={classNames(cssClasses)}>
      {colorName} won!
    </div>
  );
};
