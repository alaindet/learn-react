import { useState } from 'react';

import { MOCK_EXPENSES } from './mocks';
import { ExpensesChart, ExpenseForm, ExpensesList, CreateExpense } from './features/Expenses';
import './App.css';

export const App = () => {

  const [expenses, setExpenses] = useState(MOCK_EXPENSES);
  const [expense, setExpense] = useState(null);
  const [isExpenseFormOpen, setIsExpenseFormOpen] = useState(false);

  const clearExpenseIfAny = () => {
    if (expense) {
      setExpense(null);
    }
  };

  const onOpenCreateExpenseForm = () => {
    clearExpenseIfAny();
    setIsExpenseFormOpen(true);
  };

  const onCancelExpenseForm = () => {
    clearExpenseIfAny();
    setIsExpenseFormOpen(false);
  };

  const onSelectExpense = (index) => {
    setExpense(expenses[index]);
  };

  const onDeleteExpense = (index) => {
    setExpenses(expenses.filter((exp, i) => i !== index));
  };

  const onSubmitExpenseForm = (newExpense) => {
    const newExpenses = expense
      ? expenses.map(exp => exp.id === newExpense.id ? newExpense : exp)
      : [newExpense, ...expenses];
    clearExpenseIfAny();
    setIsExpenseFormOpen(false);
    setExpenses(newExpenses);
  };

  return (
    <main className="app">
      <h1>Expenses Tracker</h1>
      <ExpensesChart />
      <ExpenseForm
        isOpen={isExpenseFormOpen}
        expense={expense}
        onSubmit={onSubmitExpenseForm}
        onCancel={onCancelExpenseForm}
      />
      <ExpensesList
        expenses={expenses}
        onSelectExpense={onSelectExpense}
        onDeleteExpense={onDeleteExpense}
      />
      <CreateExpense
        onClick={onOpenCreateExpenseForm}
      />
    </main>
  );
};
