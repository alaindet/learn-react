import { MAX_VISIBLE_TANKS } from 'src/common/data';
import { DieValue } from 'src/common/types';
import { compareDescending, randomInteger } from 'src/common/utils';

export const rollDice = (n: number): DieValue[] => {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(randomInteger(1, 6));
  }
  result.sort(compareDescending);
  return [...result, 0, 0].slice(0, MAX_VISIBLE_TANKS) as DieValue[];
};
