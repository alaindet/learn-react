import { FunctionComponent, CSSProperties } from 'react';
import classNames from 'classnames';

import { PlayerColor } from 'src/common/types';
import './Die.scss';

export interface DieProps {
  color?: PlayerColor;
  width?: string;
  value: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Die: FunctionComponent<DieProps> = ({
  color,
  width,
  value,
}) => {
  color = color ?? 'red';
  width = width ?? '100px';

  const cssVars = {
    '--die-width': width,
  } as CSSProperties;

  const cssClasses = [
    'die',
    `--color-${color}`,
    `--value-${value}`,
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
