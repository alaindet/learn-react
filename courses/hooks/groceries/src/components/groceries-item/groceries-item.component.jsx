import React from 'react';

import './groceries-item.css';

export const GroceriesItemForm = ({
  name,
  calories,
  onChangeName,
  onChangeCalories
}) => {
  return (
    <ul className="item__info">
      <li>
        <strong>Name</strong>:
        <input
          type="text"
          value={name}
          onChange={e => onChangeName(e.target.value)}
          placeholder="Name..."
        />
      </li>
      <li>
        <strong>Calories</strong>:
        <input
          type="number"
          value={calories}
          onChange={e => onChangeCalories(e.target.value)}
          placeholder="Calories..."
        />
      </li>
    </ul>
  );
};

export const GroceriesItemDescription = ({
  name,
  calories,
}) => {
  return (
    <ul className="item__info">
      <li>
        <strong>Name</strong>: {name}
      </li>
      <li>
        <strong>Calories</strong>: {calories}
      </li>
    </ul>
  );
};

export const GroceriesItem = ({
  index,
  name,
  calories,
  isEditing,
  onRemove,
  onStartEditing,
  onStopEditing,
}) => {

  const [_name, setName] = React.useState(name);
  const [_calories, setCalories] = React.useState(calories);

  const onChangeName = newName => setName(newName);
  const onChangeCalories = newCalories => setCalories(newCalories);
  const _onRemove = () => onRemove(index);
  
  const _onStopEditing = () => {
    const item = { name: _name, calories: _calories };
    onStopEditing(item, index);
  };

  return (
    <div className="groceries-item">

      {isEditing
        ? (
          <GroceriesItemForm
            name={_name}
            calories={_calories}
            onChangeName={onChangeName}
            onChangeCalories={onChangeCalories}
          />
        ) : (
          <GroceriesItemDescription
            name={name}
            calories={calories}
          />
        )
      }

      <div className="item__controls">
        <button onClick={_onRemove}>Remove</button>
        {isEditing
          ? <button onClick={_onStopEditing}>Save</button>
          : <button onClick={onStartEditing}>Edit</button>
        }
      </div>

    </div>
  );
};
