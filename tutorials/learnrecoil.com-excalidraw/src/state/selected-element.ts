import { atom } from 'recoil';

export const selectedElementAtom = atom<number | null>({
  key: 'selectedElement',
  default: null,
});
