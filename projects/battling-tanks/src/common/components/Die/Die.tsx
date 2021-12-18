import { FunctionComponent, CSSProperties } from 'react';
import classNames from 'classnames';

import { PlayerColor } from 'src/common/types';
import { asBoolean } from 'src/common/utils';
import './Die.scss';

export interface DieProps {
  color?: PlayerColor;
  width?: string;
  value: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  isRolling?: boolean;
}

export const Die: FunctionComponent<DieProps> = ({
  color,
  width,
  value,
  isRolling,
}) => {
  color = color ?? 'red';
  width = width ?? '100px';
  isRolling = asBoolean(isRolling);
  value = isRolling ? 0 : value;

  const cssVars = {
    '--die-width': width,
  } as CSSProperties;

  const cssClasses = [
    'die',
    `--color-${color}`,
    `--value-${value}`,
    isRolling ? '--rolling' : '',
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
