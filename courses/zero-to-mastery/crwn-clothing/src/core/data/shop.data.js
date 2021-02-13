import { HATS } from './hats.data';
import { SNEAKERS } from './sneakers.data';
import { JACKETS } from './jackets.data';
import { WOMEN } from './women.data';
import { MEN } from './men.data';

export const SHOP = [
  {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: HATS,
  },
  {
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: SNEAKERS,
  },
  {
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: JACKETS,
  },
  {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: WOMEN,
  },
  {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: MEN,
  },
];
