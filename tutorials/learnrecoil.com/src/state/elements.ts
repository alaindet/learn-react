import { atom, atomFamily } from 'recoil';

import { Element } from '../types';

export const elementsAtom = atom<number[]>({
  key: 'elements',
  default: [],
});

export const elementAtom = atomFamily<Element, number>({
  key: 'element',
  default: {
    style: {
      position: { top: 150, left: 150 },
      size: { width: 100, height: 100 },
    },
  },
});
