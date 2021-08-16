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

  const removeMostCaloric = () => {
    const newList = list.filter(i => i.calories <= CALORIES_THRESHOLD);
    setList(newList);
  };

  return (
    <div className="app">
      <h1>Groceries App</h1>

      <div className="groceries-list">
        {list.map((item, i) => (
          <GroceriesItem key={i} {...item} />
        ))}
      </div>

      <div className="groceries-controls">
        <button onClick={removeMostCaloric}>
          Remove items with &gt; {CALORIES_THRESHOLD}
        </button>
      </div>

    </div>
  );
}
