import { selectorFamily } from 'recoil';
import { get as lodashGet, PropertyPath } from 'lodash';

import { elementAtom } from './elements';
import { selectedElementAtom } from './selected-element';

export const editPropertyAtom = selectorFamily({
  key: 'editProperty',
  get: (path) => ({ get }) => {
    const selectedId = get(selectedElementAtom);
    if (selectedId === null) return null;
    const element = get(elementAtom(selectedId));
    return lodashGet(element, path as PropertyPath);
    // TODO
  },
});
