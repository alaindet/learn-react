import { ReactNode } from 'react'
import { DraggableCore } from 'react-draggable'

import { ElementStyle } from '../types'

interface DragProps {
  position: ElementStyle['position']
  onDrag: (position: ElementStyle['position']) => void
  children: ReactNode
}

export function Drag({ position, onDrag, children }: DragProps) {

  function handleDrag(e: any) {
    onDrag({
      left: e.movementX + position.left,
      top: e.movementY + position.top,
    });
  }

  return (
    <DraggableCore onDrag={handleDrag}>
      {children}
    </DraggableCore>
  )
}
