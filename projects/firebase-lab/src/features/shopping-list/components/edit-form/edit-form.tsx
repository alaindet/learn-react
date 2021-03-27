import { FC, useState, FormEvent } from 'react';

import { ShoppingListItem, ShoppingListItemUpdateDto } from '../../models';

export interface EditFormProps {
  item: ShoppingListItem;
  onSubmit: (dto: ShoppingListItemUpdateDto) => void;
}

export const EditForm: FC<EditFormProps> = ({ item, onSubmit }) => {

  const [name, setName] = useState(item.name);
  const [quantity, setQuantity] = useState(item.quantity);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const id = item.id;
    const updatedItem = { id, name, quantity };
    onSubmit(updatedItem);
  }

  return (
    <>
      <h3>Update item #{item.id}</h3>
      <form onSubmit={event => handleSubmit(event)}>

        <div className="form-group">
          <label htmlFor="item-name">Name</label>
          <input
            type="text"
            id="item-name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="item-quantity">Quantity</label>
          <input
            type="number"
            id="item-quantity"
            value={quantity}
            onChange={e => setQuantity(+e.target.value)}
          />
        </div>

        <button type="submit">Update</button>

      </form>
    </>
  );
};
