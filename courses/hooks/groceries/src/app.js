import React from 'react';

import { GroceriesItem } from './components/groceries-item';
import { useList } from './hooks/use-list';
import './app.css';

const GROCERIES_LIST = [
  { name: 'tomato', calories: 30 },
  { name: 'rice', calories: 40 },
  { name: 'candies', calories: 100 },
];

const CALORIES_THRESHOLD = 50;

export const App = () => {

  const items = useList(GROCERIES_LIST);
  const [isEditing, setIsEditing] = React.useState(false);

  const onRemoveMostCaloric = () => {
    items.removeWithCaloriesMoreThan(CALORIES_THRESHOLD);
  };

  const onRemoveItem = index => {
    items.removeItem(index);
    if (isEditing) {
      setIsEditing(false);
    }
  };

  const onStartEditing = () => {
    setIsEditing(true);
  };

  const onStopEditing = (item, index) => {
    setIsEditing(false);
    items.saveItem(index, item);
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
        {items.list.map((item, i) => (
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
