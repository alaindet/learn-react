import { FC } from 'react';

import { ShoppingListItem } from '../../models';

export interface ListProps {
  items: ShoppingListItem[];
  onSelect: (item: ShoppingListItem) => void;
  onDelete: (itemId: string) => void;
}

export const List: FC<ListProps> = ({ items, onSelect, onDelete }) => {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={item.name}>
          x{item.quantity}
          &nbsp;
          {item.name}
          &nbsp;
          <button onClick={() => onSelect(item)}>Select</button>
          &nbsp;
          <button onClick={() => onDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
