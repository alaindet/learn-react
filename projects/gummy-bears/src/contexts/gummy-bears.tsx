import { createContext, ReactNode, useState } from 'react';

import { makeId } from '../utils';
import { GummyBearType, CreateGummyBearDto } from '../types';

export interface GummyBearsContextType {
  itemWidth: number;
  setItemWidth: (width: number) => void;
  editingItem: GummyBearType | null;
  setEditingItem: (id: GummyBearType['id']) => void;
  items: GummyBearType[];
  create: (dto: CreateGummyBearDto) => void;
  edit: (gummyBear: GummyBearType) => void;
  remove: (id: GummyBearType['id']) => void;
};

export const GummyBearsContext = createContext<GummyBearsContextType>({
  itemWidth: 50,
  setItemWidth: () => {},
  editingItem: null,
  setEditingItem: () => {},
  items: [],
  create: () => {},
  edit: () => {},
  remove: () => {},
});

export function GummyBearsContextProvider({
  children,
}: { children: ReactNode }) {

  const [itemWidth, setItemWidth] = useState<number>(50);
  const [editingItem, _setEditingItem] = useState<GummyBearType | null>(null);
  const [items, setItems] = useState<GummyBearType[]>([]);

  const create = (dto: CreateGummyBearDto) => {
    setItems(items => {
      const item = {...dto, id: makeId(5)};
      return [item, ...items];
    });
  };

  const setEditingItem = (id: GummyBearType['id'] | null) => {
    if (id === null) {
      _setEditingItem(null);
    } else {
      _setEditingItem(items.find(item => item.id === id) ?? null);
    }
  };

  const edit = (gummyBear: GummyBearType) => {
    setItems(items => {
      return items.map(item => (gummyBear.id === item.id) ? gummyBear : item);
    });
  };

  const remove = (id: GummyBearType['id']) => {
    setItems(items => {
      return items.filter(item => id !== item.id);
    });
  };

  return (
    <GummyBearsContext.Provider value={{
      itemWidth,
      setItemWidth,
      editingItem,
      setEditingItem,
      items,
      create,
      edit,
      remove,
    }}>
      {children}
    </GummyBearsContext.Provider>
  );
}
