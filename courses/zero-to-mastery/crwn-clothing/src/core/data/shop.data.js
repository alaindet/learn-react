import { hats } from './hats.data';
import { sneakers } from './sneakers.data';
import { jackets } from './jackets.data';
import { women } from './women.data';
import { men } from './men.data';

export const SHOP_DATA = [
  {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: hats,
  },
  {
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: sneakers,
  },
  {
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: jackets,
  },
  {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: women,
  },
  {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: men,
  },
];
