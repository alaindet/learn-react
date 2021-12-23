import { FunctionComponent, CSSProperties } from 'react';
import classNames from 'classnames';

import { DieValue, PlayerColor } from 'src/common/types';
import './Die.scss';

export interface DieProps {
  color?: PlayerColor;
  width?: string;
  value: DieValue;
  isRolling?: boolean;
  isDisabled?: boolean;
}

export const Die: FunctionComponent<DieProps> = ({
  color,
  width,
  value,
  isRolling,
  isDisabled,
}) => {
  color = color ?? PlayerColor.Red;
  width = width ?? '100px';
  isRolling = isRolling ?? false;
  isDisabled = isDisabled ?? false;

  if (isRolling) {
    value = 0;
  } else if (isDisabled || value === -1) {
    value = 0;
    isDisabled = true;
  }

  const cssVars = {
    '--die-width': width,
  } as CSSProperties;

  const cssClasses = [
    'die',
    `--color-${color}`,
    `--value-${value}`,
    isRolling ? '--rolling' : null,
    isDisabled ? '--disabled' : null,
  ];

  return (
    <div className={classNames(cssClasses)} style={cssVars}>
      <div className="die-row die-row-1">
        <div className="die-dot"></div>
      </div>
      <div className="die-row die-row-2">
        <div className="die-dot"></div>
      </div>
      <div className="die-row die-row-3">
        <div className="die-dot"></div>
      </div>
    </div>
  );
};
