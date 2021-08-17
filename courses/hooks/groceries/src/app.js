import React from 'react';

import { GroceriesItem } from './components/groceries-item';
import './app.css';

const GROCERIES_LIST = [
  { name: 'tomato', calories: 30 },
  { name: 'rice', calories: 40 },
  { name: 'candies', calories: 100 },
];

const CALORIES_THRESHOLD = 50;

export const App = () => {

  const [list, setList] = React.useState(GROCERIES_LIST);
  const [isEditing, setIsEditing] = React.useState(false);

  function onRemoveMostCaloric() {
    const newList = list.filter(i => i.calories < CALORIES_THRESHOLD);
    setList(newList);
  };

  function onRemoveItem(index) {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
    if (isEditing) {
      setIsEditing(false);
    }
  };

  function onStartEditing() {
    setIsEditing(true);
  };

  function onStopEditing(item, index) {
    setIsEditing(false);
    const newList = list.map((_item, i) => i === index ? item : _item);
    setList([...newList]);
  };

  return (
    <div className="groceries">
      <h1>Groceries App</h1>

      <div className="groceries-controls">
        <button onClick={onRemoveMostCaloric}>
          Remove items with {CALORIES_THRESHOLD}+ calories
        </button>
      </div>

      <div className="groceries-list">
        {list.map((item, i) => (
          <GroceriesItem
            key={i}
            index={i}
            name={item.name}
            calories={item.calories}
            isEditing={isEditing}
            onRemove={onRemoveItem}
            onStartEditing={onStartEditing}
            onStopEditing={onStopEditing}
          />
        ))}
      </div>

    </div>
  );
}
