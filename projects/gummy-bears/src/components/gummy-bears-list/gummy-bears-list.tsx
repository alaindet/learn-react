import { CSSProperties, useContext, useEffect, useRef, useState } from 'react';

import { GummyBearsContext } from '../../contexts';
import { GummyBearType } from '../../types';
import { capitalize } from '../../utils';
import { GummyBearAction } from '../gummy-bear-action/gummy-bear-action';
import { GummyBear } from '../gummy-bear/gummy-bear';
import './gummy-bears-list.scss';

export interface GummyBearsListProps {
  items: GummyBearType[];
  onEdit: (id: GummyBearType['id']) => void;
  onRemove: (id: GummyBearType['id']) => void;
}

export function GummyBearsList({
  items,
  onEdit,
  onRemove,
}: GummyBearsListProps) {

  const { itemWidth } = useContext(GummyBearsContext);
  const [maxHeight, setMaxHeight] = useState<number>(300);
  const ref = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (ref.current === null) return;
    const rect: DOMRect = ref.current.getBoundingClientRect();
    setMaxHeight(window.innerHeight - rect.top - 24);
  }, []);

  if (items.length === 0) {
    return (
      <p className="gummy-bears-list -none">
        Add some gummy bear to the village
      </p>
    );
  }

  const cssStyle = { '--max-height': `${maxHeight}px` } as CSSProperties;

  return (
    <ul ref={ref} className="gummy-bears-list" style={cssStyle}>
      {items.map(item => (
        <li key={item.id} className="_item">

          <div className="_gummy-bear">
            <GummyBear flavor={item.flavor} width={`${itemWidth}px`} />
          </div>

          <div className="_info">
            <h3>{capitalize(item.name)}</h3>
            <p>{capitalize(item.description)}</p>
          </div>

          <div className="_actions">
            <GummyBearAction icon="edit" onClick={() => onEdit(item.id)} />
            <GummyBearAction icon="remove" onClick={() => onRemove(item.id)} />
          </div>
        </li>
      ))}
    </ul>
  );
}
