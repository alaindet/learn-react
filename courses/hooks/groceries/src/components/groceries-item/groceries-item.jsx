import React from 'react';

import { GroceriesItemForm } from './components/groceries-item-form';
import { GroceriesItemDescription } from './components/groceries-item-description';
import './groceries-item.css';

export const GroceriesItem = ({
  index,
  name,
  calories,
  isEditing,
  onRemove,
  onStartEditing,
  onStopEditing,
}) => {

  const [submitFromOutside, setSubmitFromOutside] = React.useState(false);

  const onRemoveItem = () => onRemove(index);
  const onForceSave = () => setSubmitFromOutside(true);
  const onUpdateItem = newItem => {
    setSubmitFromOutside(false);
    onStopEditing(newItem, index);
  };

  return (
    <div className="groceries-item">

      {isEditing
        ? (
          <GroceriesItemForm
            name={name}
            calories={calories}
            onUpdateItem={onUpdateItem}
            submitFromOutside={submitFromOutside}
          />
        ) : (
          <GroceriesItemDescription
            name={name}
            calories={calories}
          />
        )
      }

      <div className="item__controls">
        <button onClick={onRemoveItem}>Remove</button>
        {isEditing
          ? <button onClick={onForceSave}>Save</button>
          : <button onClick={onStartEditing}>Edit</button>
        }
      </div>

    </div>
  );
};
