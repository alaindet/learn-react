import { useState } from 'react';

import './App.css';
import { ExpenseItem } from './components';

export const App = () => {

  const [expense] = useState({
    title: 'Some expense',
    date: Date.now(),
    amount: 16.90,
  });

  return (
    <div className="App">
      <h1>Expenses Tracker</h1>
      <ExpenseItem
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
      />
    </div>
  );
}
