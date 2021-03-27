import { FC, FormEvent, useState } from 'react';

import { ShoppingListItemCreateDto } from '../../models';

export interface CreateFormProps {
  onSubmit: (dto: ShoppingListItemCreateDto) => void;
}

export const CreateForm: FC<CreateFormProps> = ({ onSubmit }) => {

  const [name, setName] = useState('');

  function resetForm(): void {
    setName('');
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const quantity = 1;
    const newItem = { name, quantity };
    onSubmit(newItem);
    resetForm();
  }

  return (
    <>
      <h3>Create new item</h3>
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

        <button type="submit">Create</button>

      </form>
    </>
  );
};
