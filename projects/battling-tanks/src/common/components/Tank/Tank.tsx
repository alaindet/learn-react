import { FunctionComponent, CSSProperties } from 'react';
import classNames from 'classnames';

import { PlayerColor, TankDirection } from 'src/common/types';
import './Tank.scss';

export interface TankProps {
  color?: PlayerColor;
  width?: string;
  facing?: TankDirection;
  isShooting?: boolean;
  isDisabled?: boolean;
  isDestroyed?: boolean;
  className?: string;
}

export const Tank: FunctionComponent<TankProps> = ({
  color,
  width,
  facing,
  isShooting,
  isDisabled,
  isDestroyed,
  className,
}) => {

  color = color ?? PlayerColor.Red;
  width = width ?? '100px';
  facing = facing ?? 'down';
  isShooting = isShooting ?? false;
  isDisabled = isDisabled ?? false;
  isDestroyed = isDestroyed ?? false;

  const cssVars = {
    '--tank-width': width,
  } as CSSProperties;

  const cssClasses = [
    'tank',
    `--color-${color}`,
    `--facing-${facing}`,
    isDisabled ? '--disabled' : null,
    isShooting ? '--shooting' : null,
    isDestroyed ? '--destroyed' : null,
    className ?? null,
  ];

  return (
    <div className={classNames(cssClasses)} style={cssVars}>
      <div className="tank-head"></div>
      <div className="tank-cannon-body"></div>
      <div className="tank-cannon-tip"></div>
      <div className="tank-shot"></div>
    </div>
  );
};
