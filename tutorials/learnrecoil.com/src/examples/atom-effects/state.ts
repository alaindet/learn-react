import { atom, atomFamily } from 'recoil';

import { ItemType } from './types';
import { persistEffect } from './effects';

export const idsState = atom<number[]>({
  key: 'ids',
  default: [],
  effects: [persistEffect],
});

export const itemState = atomFamily<ItemType, number>({
  key: 'item',
  default: { label: '', checked: false },
  effects: [persistEffect],
});
