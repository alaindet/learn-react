import { useRecoilState } from 'recoil';

import { elementAtom, selectedElementAtom } from '../../state';
import { Position, Element, ElementStyle } from '../../types';
import { Drag } from '../Drag';
import { Resize } from '../Resize';
import { RectangleContainer } from './RectangleContainer';
import { RectangleInner } from './RectangleInner';

interface RectangleProps {
  id: number;
}

export function Rectangle({ id }: RectangleProps) {

  const [selectedElement, setSelectedElement] = useRecoilState(selectedElementAtom);
  const [element, setElement] = useRecoilState(elementAtom(id));

  const isSelected = selectedElement === id;

  function handleDrag(position: Position) {
    const style = { ...element.style, position };
    const newElement: Element = { style };
    setElement(newElement);
  }

  function handleResize(style: ElementStyle) {
    setElement({ ...element, style });
  }

  return (
    <RectangleContainer
      position={element.style.position}
      size={element.style.size}
      onSelect={() => setSelectedElement(id)}
    >
      <Resize
        selected={isSelected}
        position={element.style.position}
        size={element.style.size}
        onResize={handleResize}
      >
        <Drag position={element.style.position} onDrag={handleDrag}>
          <div>
            <RectangleInner selected={isSelected} />
          </div>
        </Drag>
      </Resize>
    </RectangleContainer>
  );
}
