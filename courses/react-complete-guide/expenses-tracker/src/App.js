import { useState } from 'react';

import { Expenses, NewExpense } from './components/Expenses';
import { MOCK_EXPENSES } from './mocks';
import './App.css';
import { SelectedExpense } from './components/Expenses/SelectedExpense/SelectedExpense';

export const App = () => {

  const [expenses, setExpenses] = useState(MOCK_EXPENSES);
  const [currentExpense, setCurrentExpense] = useState(null);

  // TODO
  const onSelectItem = (itemIndex) => {
    const item = MOCK_EXPENSES[itemIndex];
    setCurrentExpense(item);
  };

  const onCreateExpense = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  // TODO
  const onDeselectItem = () => {
    setCurrentExpense(null);
  };

  return (
    <div className="App">
      <h1>Expenses Tracker</h1>
      <NewExpense onCreateExpense={onCreateExpense} />
      {currentExpense && (
        <SelectedExpense item={currentExpense} onClick={onDeselectItem} />
      )}
      <Expenses items={expenses} onItemClick={onSelectItem} />
    </div>
  );
}
