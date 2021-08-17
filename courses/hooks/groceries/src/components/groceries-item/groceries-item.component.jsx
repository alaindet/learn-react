import React from 'react';

import './groceries-item.css';

export const GroceriesItemForm = ({
  name,
  calories,
  onUpdateItem,
  submitFromOutside,
}) => {

  const [_name, setName] = React.useState(name);
  const [_calories, setCalories] = React.useState(calories);

  const onChangeName = newName => setName(newName);

  const onChangeCalories = newCalories => setCalories(newCalories);

  const onSubmit = React.useCallback(() => {
    console.log('Submitting');
    const item = { name: _name, calories: _calories };
    onUpdateItem(item);
  }, [_name, _calories, onUpdateItem]);

  const onPressEnter = key => {
    if (key === 'Enter') {
      onSubmit();
    }
  };

  React.useEffect(() => {
    if (submitFromOutside) {
      onSubmit();
    }
  }, [submitFromOutside, onSubmit]);

  return (
    <form onSubmit={onSubmit}>
      <ul className="item__info">
        <li>
          <strong>Name</strong>:
          <input
            type="text"
            value={_name}
            placeholder="Name..."
            onChange={e => onChangeName(e.target.value)}
            onKeyPress={e => onPressEnter(e.key)}
          />
        </li>
        <li>
          <strong>Calories</strong>:
          <input
            type="number"
            value={_calories}
            onChange={e => onChangeCalories(e.target.value)}
            onKeyPress={e => onPressEnter(e.key)}
            placeholder="Calories..."
          />
        </li>
      </ul>
    </form>
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
