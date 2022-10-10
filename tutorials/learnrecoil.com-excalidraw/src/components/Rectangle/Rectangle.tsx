import { useRecoilState } from 'recoil';

import { elementAtom, selectedElementAtom } from '../../state';
import { Position, Element } from '../../types';
import { Drag } from '../Drag';
import { RectangleContainer } from './RectangleContainer';
import { RectangleInner } from './RectangleInner';

interface RectangleProps {
  id: number;
}

export function Rectangle({ id }: RectangleProps) {

  const [selectedElement, setSelectedElement] = useRecoilState(selectedElementAtom);
  const [element, setElement] = useRecoilState(elementAtom(id));

  function handleDragElement(position: Position) {
    const style = { ...element.style, position };
    const newElement: Element = { style };
    setElement(newElement);
  }

  return (
    <Drag position={element.style.position} onDrag={handleDragElement}>
      <div>
        <RectangleContainer
          position={element.style.position}
          size={element.style.size}
          onSelect={() => setSelectedElement(id)}
        >
          <RectangleInner selected={id === selectedElement} />
        </RectangleContainer>
      </div>
    </Drag>
  );
}
