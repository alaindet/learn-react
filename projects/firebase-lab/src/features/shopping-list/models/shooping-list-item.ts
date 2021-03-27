export interface ShoppingListItem {
  id: string;
  name: string;
  quantity: number;
}

export interface ShoppingListItemCreateDto {
  name: string;
  quantity: number;
}

export interface ShoppingListItemUpdateDto extends ShoppingListItem {
  //
}
