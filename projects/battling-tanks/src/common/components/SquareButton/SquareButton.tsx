import classNames from 'classnames';
import { CSSProperties, FunctionComponent } from 'react';

import { PlayerColor } from 'src/common/types';
import './SquareButton.scss';

export interface SquareButtonProps {
  color: PlayerColor;
  isActive?: boolean;
  isDisabled?: boolean;
  size?: string;
  className?: string;
  onClick: (color: PlayerColor) => void;
}

export const multiplyCssNumberByFactor = (cssNumber: string, factor: number): string => {
  const value: number = parseInt(cssNumber);
  const cssUnit = cssNumber.replace(value.toString(), '');
  const newValue = value * factor;
  return `${newValue}${cssUnit}`;
};

export const SquareButton: FunctionComponent<SquareButtonProps> = ({
  color,
  isActive,
  isDisabled,
  size,
  onClick,
  className,
  children,
}) => {
  size = size ?? '64px';
  isActive = isActive ?? false;
  isDisabled = isDisabled ?? false;

  const cssClasses = [
    'color-sample',
    `--color-${color}`,
    isActive ? '--active' : null,
    isDisabled ? '--disabled' : null,
    className ?? null,
  ];

  const cssStyle: CSSProperties = {};

  if (size) {
    const fontSize = multiplyCssNumberByFactor(size, 0.7);
    cssStyle.width = size;
    cssStyle.lineHeight = fontSize;
    cssStyle.fontSize = fontSize;
    cssStyle.height = size;
  }

  return (
    <button
      type="button"
      className={classNames(cssClasses)}
      style={cssStyle}
      onClick={() => onClick(color)}
    >
      {children}
    </button>
  );
};
