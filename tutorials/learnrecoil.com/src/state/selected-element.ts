import { atom, selector } from 'recoil';

import { Element } from '../types';
import { elementAtom } from './elements';

export const selectedElementAtom = atom<number | null>({
  key: 'selectedElement',
  default: null,
});

export const selectedElementPropertiesAtom = selector<Element | null>({
  key: 'selectedElementProperties',
  get: ({ get }) => {
    const selectedElementId = get(selectedElementAtom);
    if (selectedElementId === null) return null;
    return get(elementAtom(selectedElementId));
  },
  set: ({ get, set }, newElement) => {
    const selectedElementId = get(selectedElementAtom);
    if (selectedElementId === null) return null;
    if (!newElement) return null;
    set(elementAtom(selectedElementId), newElement);
  },
});
