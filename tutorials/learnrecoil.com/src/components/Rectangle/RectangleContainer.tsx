import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

import { ElementStyle } from '../../types';

interface RectangleContainerProps {
  position: ElementStyle['position'];
  size: ElementStyle['size'];
  onSelect: () => void;
  children: ReactNode;
}

export function RectangleContainer({
  size,
  position,
  onSelect,
  children,
}: RectangleContainerProps) {
  return (
    <Box
      position="absolute"
      style={{ ...size, ...position }}
      onMouseDown={() => onSelect()}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </Box>
  );
}
