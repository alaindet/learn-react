import { ReactNode } from 'react';
import { Resizable, ResizeHandle } from 'react-resizable';

import { Handle } from './Handle';
import { ElementStyle } from '../types';

const handlePlacements: ResizeHandle[] = [
  'n', // North
  's', //  South
  'e', // East
  'w', // West
  'ne', // Nort-East
  'nw', // Nort-West
  'se', // South-East
  'sw', // South-West
];

interface ResizeProps extends ElementStyle {
  selected: boolean;
  onResize: (style: ElementStyle) => void;
  children: ReactNode;
}

export function Resize({
  selected,
  children,
  position,
  size,
  onResize,
}: ResizeProps) {

  function handleResize(_: any, { size: newSize, handle }: any) {
    let topDiff = 0
    if (handle.includes('n')) {
      topDiff = size.height - newSize.height
    }

    let leftDiff = 0
    if (handle.includes('w')) {
      leftDiff = size.width - newSize.width
    }

    onResize({
      size: {
        width: Math.round(newSize.width),
        height: Math.round(newSize.height),
      },
      position: {
        top: position.top + topDiff,
        left: position.left + leftDiff,
      },
    })
  }

  return (
    <Resizable
      width={size.width}
      height={size.height}
      onResize={handleResize}
      resizeHandles={handlePlacements}
      handle={(placement) => (
        <div>
          <Handle placement={placement} visible={selected} />
        </div>
      )}
    >
      <div>{children}</div>
    </Resizable>
  )
}
