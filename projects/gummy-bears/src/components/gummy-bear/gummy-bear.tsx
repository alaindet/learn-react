import { CSSProperties } from 'react';

import { GummyBearFlavor } from '../../types/gummy-bear';
import './gummy-bear.scss';

export interface GummyBearProps {
  flavor: GummyBearFlavor;
  width?: string;
}

export function GummyBear({
  flavor = 'raspberry',
  width,
}: GummyBearProps) {

  const cssStyle = !width ? {} : {'--width': width} as CSSProperties;

  return (
    <div className={`gummy-bear -flavor-${flavor}`} style={cssStyle}>
      <div className="_head">
        <div className="_eyes"></div>
        <div className="_nose"></div>
      </div>
      <div className="_body">
        <div className="_belly"></div>
      </div>
    </div>
  );
}
