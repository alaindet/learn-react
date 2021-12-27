import { useState } from 'react';

import { MOCK_EXPENSES } from './mocks';
import { useEffectOnce } from './common/hooks';
import { ThemeSwitcher } from './core/components';
import { ExpenseForm, ExpensesList, CreateExpense } from './features/Expenses';
import './App.css';

export const App = () => {

  const [expenses, setExpenses] = useState(MOCK_EXPENSES);
  const [expense, setExpense] = useState(null);
  const [activeItemIndex, setActiveItemIndex] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(true);
  const [lastId, setLastId] = useState(0);

  useEffectOnce(() => {
    let id = 0;
    expenses.forEach(exp => {
      if (exp.id > id) {
        id = exp.id;
      }
    });
    setLastId(id);
  }, [expenses], deps => true);

  const clearExpenseIfAny = () => {
    if (expense) {
      setExpense(null);
    }
    setActiveItemIndex(null);
  };

  const openFormIfClose = () => {
    if (!isFormOpen) {
      setIsFormOpen(true);
    }
  };

  const onActivateItem = (indexOrNull) => {
    setActiveItemIndex(indexOrNull);
  };

  const onOpenCreateExpenseForm = () => {
    clearExpenseIfAny();
    openFormIfClose();
  };

  const onCancelExpenseForm = () => {
    clearExpenseIfAny();
    setIsFormOpen(false);
  };

  const onSelectExpenseToEdit = (index) => {
    setExpense({ ...expenses[index] });
    openFormIfClose();
  };

  const onDeleteExpense = (index) => {
    setExpenses(expenses.filter((exp, i) => i !== index));
  };

  const onToggleForm = (forcedState) => {
    setIsFormOpen(forcedState ?? !isFormOpen);
  };

  const onSubmitExpenseForm = (newExpense) => {

    // Editing
    if (expense) {
      const { id } = newExpense;
      const newExpenses = expenses.map(exp => exp.id === id ? newExpense : exp);
      setExpenses(newExpenses);
      onCancelExpenseForm();
      return;
    }

    // Creating
    const id = lastId + 1;
    const newExpenses = [{ ...newExpense, id }, ...expenses];
    setExpenses(newExpenses);
    onCancelExpenseForm();
  };

  return (
    <main className="app">

      <div className="theme-switcher-container">
        <ThemeSwitcher />
      </div>

      <h1>Expenses Tracker</h1>

      <ExpenseForm
        expense={expense}
        onSubmit={onSubmitExpenseForm}
        onCancel={onCancelExpenseForm}
        isOpen={isFormOpen}
        toggleOpen={onToggleForm}
      />
      <ExpensesList
        expenses={expenses}
        onCancelEdit={onCancelExpenseForm}
        onEditExpense={onSelectExpenseToEdit}
        onDeleteExpense={onDeleteExpense}
        onActivateItem={onActivateItem}
        activeItemIndex={activeItemIndex}
      />
      <CreateExpense
        onClick={onOpenCreateExpenseForm}
      />
    </main>
  );
};
