import { atom, DefaultValue } from 'recoil';

import { ItemType } from './types';

const STORAGE_KEY = 'my-shopping-list';

function storeData(data: ItemType[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function fetchData(): ItemType[] | null {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw === null) return null;
  return JSON.parse(raw);
}

function clearData(): void {
  localStorage.removeItem(STORAGE_KEY);
}

export const shoppingListState = atom<ItemType[]>({
  key: 'shoppingList',
  default: [],
  effects: [
    props => {

      // Triggered each time data changes or gets reset
      props.onSet(updatedData => {
        if (updatedData instanceof DefaultValue) {
          clearData();
        } else {
          storeData(updatedData);
        }
      });

      // Triggerd on creation
      const storedData = fetchData();
      if (storedData !== null) {
        props.setSelf(storedData);
      }

    },
  ],
});
