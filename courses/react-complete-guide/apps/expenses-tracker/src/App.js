import { useState } from 'react';

import { MOCK_EXPENSES } from './mocks';
import { ExpenseForm, ExpensesList, CreateExpense } from './components';
import './App.css';

export const App = () => {

  const [expenses] = useState(MOCK_EXPENSES);

  return (
    <main className="app">
      <h1>Expenses Tracker</h1>
      <ExpenseForm />
      <ExpensesList expenses={expenses} />
      <CreateExpense />
    </main>
  );
};
