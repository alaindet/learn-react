import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { GummyBearsContext } from '../../contexts';
import { GummyBearType, GummyBearFlavor } from '../../types';
import { Button } from '../button/button';
import { GummyBearsTrail } from '../gummy-bears-trail/gummy-bears-trail';
import { TextInput } from '../text-input/text-input';
import './gummy-bear-form.scss';

interface FormData {
  name: string;
  description: string;
};

export interface GummyBearFormProps {
  item: GummyBearType | null;
}

export function GummyBearForm({
  item = null,
}: GummyBearFormProps) {

  const ctx = useContext(GummyBearsContext);
  const { register, handleSubmit, setValue, setFocus } = useForm<FormData>();
  const [flavor, setFlavor] = useState<GummyBearFlavor>('lemon');

  const itemWidth = `${ctx.itemWidth}px`;

  useEffect(() => {
    if (ctx.editingItem === null) return;
    const { name, description } = ctx.editingItem;
    setValue('name', name);
    setValue('description', description);
  }, [ctx.editingItem]);

  function onSubmit(formData: FormData) {

    // TODO: Validation
    if (!formData.name || !formData.description) return;

    if (ctx.editingItem) {
      ctx.edit({ ...ctx.editingItem, ...formData, flavor });
      ctx.setEditingItem(null);
    } else {
      ctx.create({ ...formData, flavor });
    }

    setValue('name', '');
    setValue('description', '');
    setFocus('name');
  }

  return (
    <div className="gummy-bear-form">
      <form className="_form" onSubmit={handleSubmit(onSubmit)}>

        <div className="_trail">
          <GummyBearsTrail
            itemWidth={itemWidth}
            selected={flavor}
            onSelect={setFlavor}
          />
        </div>
        
        <div className="_control">
          <label htmlFor="name-field">Name</label>
          <TextInput
            id="name-field"
            fullsize={true}
            placeholder="Gummy Bear name..."
            {...register('name', { required: true })}
            defaultValue=""
          />
        </div>

        <div className="_control">
          <label htmlFor="description-field">Description</label>
          <TextInput
            id="description-field"
            fullsize={true}
            placeholder="Gummy Bear description..."
            {...register('description', { required: true })}
            defaultValue=""
          />
        </div>

        <div className="_control -end">
          <Button color="outline" type="submit">
            {item === null ? 'Add' : 'Edit'}
          </Button>
        </div>

      </form>
    </div>
  );
}
