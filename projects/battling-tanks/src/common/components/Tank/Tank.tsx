import { FunctionComponent, CSSProperties } from 'react';
import classNames from 'classnames';

import { PlayerColor, TankDirection } from 'src/common/types';
import './Tank.scss';

export interface TankProps {
  color?: PlayerColor;
  width?: string;
  facing?: TankDirection;
}

export const Tank: FunctionComponent<TankProps> = ({
  color,
  width,
  facing,
}) => {
  color = color ?? 'red';
  width = width ?? '100px';
  facing = facing ?? 'down';

  const cssVars = {
    '--tank-width': width,
  } as CSSProperties;

  const cssClasses = [
    'tank',
    `--color-${color}`,
    facing === 'up' ? '--flipped' : '',
  ];

  return (
    <div className={classNames(cssClasses)} style={cssVars}>
      <div className="tank-head"></div>
      <div className="tank-cannon-body"></div>
      <div className="tank-cannon-tip"></div>
    </div>
  );
};
