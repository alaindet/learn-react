import { useState } from 'react';

import { MOCK_EXPENSES } from './mocks';
import { ExpenseForm, ExpensesList, CreateExpense } from './components';
import './App.css';

export const App = () => {

  const [expenses, setExpenses] = useState(MOCK_EXPENSES);

  const onOpenCreateExpenseForm = () => {
    console.log('onOpenCreateExpenseForm');
  };

  const onOpenEditExpenseForm = () => {
    console.log('onOpenCreateExpenseForm');
  };

  return (
    <main className="app">
      <h1>Expenses Tracker</h1>
      <ExpenseForm />
      <ExpensesList expenses={expenses} />
      <CreateExpense onClick={onOpenCreateExpenseForm}/>
    </main>
  );
};
