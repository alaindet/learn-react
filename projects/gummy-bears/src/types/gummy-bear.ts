export type GummyBearFlavor = (
  | 'raspberry'
  | 'orange'
  | 'strawberry'
  | 'pineapple'
  | 'lemon'
);

export interface GummyBearType {
  id: string;
  name: string;
  description: string;
  flavor: GummyBearFlavor;
}

export interface CreateGummyBearDto {
  name: GummyBearType['name'];
  description: GummyBearType['description'];
  flavor: GummyBearType['flavor'];
}
