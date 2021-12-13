import { useState } from 'react';

import './App.css';
import { ExpenseItem, ExpenseItems } from './components';

export const MOCK_EXPENSES = [
  {
    title: 'Some expense',
    date: Date.now(),
    amount: 16.90,
  },
  {
    title: 'Another expense',
    date: Date.now(),
    amount: 104.90,
  },
];

export const App = () => {

  const [expenses] = useState(MOCK_EXPENSES);

  return (
    <div className="App">
      <h1>Expenses Tracker</h1>
      <ExpenseItems>
        {expenses.map(expense => (
          <ExpenseItem
            key={expense.title}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))}
      </ExpenseItems>
    </div>
  );
}
