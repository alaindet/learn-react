import { FormOption, GummyBearFlavor } from '../../types';
import { range } from '../../utils';

export const FLAVORS: FormOption<GummyBearFlavor>[] = [
  { value: 'lemon', label: 'Lemon' },
  { value: 'orange', label: 'Orange' },
  { value: 'pineapple', label: 'Pineapple' },
  { value: 'raspberry', label: 'Raspberry' },
  { value: 'strawberry', label: 'Strawberry' },
];

export const AMOUNTS: FormOption<number>[] = range(1, 10).map(n => {
  return { value: n, label: `${n}` };
});