import React from 'react';

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
