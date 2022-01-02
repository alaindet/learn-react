import { useEffect, useState } from 'react';

import { MOCK_EXPENSES } from './mocks';
import { useEffectOnce } from './common/hooks';
import { ThemeSwitcher } from './core/components';
import {
  CreateExpense,
  ExpenseForm,
  ExpensesChart,
  ExpensesFilters,
  ExpensesList,
} from './features/Expenses';
import './App.css';

export const App = () => {

  const [expenses, setExpenses] = useState(MOCK_EXPENSES);
  const [filteredExpenses, setFilteredExpenses] = useState(MOCK_EXPENSES);
  const [filters, setFilters] = useState(null);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [expense, setExpense] = useState(null);
  const [activeItemIndex, setActiveItemIndex] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [lastId, setLastId] = useState(0);

  const filterExpenses = (_expenses, _filters) => {
    if (_filters === null) {
      return _expenses;
    }
    return _expenses.filter(exp => {
      if (_filters.year) {
        const expYear = (new Date(exp.date)).getFullYear();
        return _filters.year === expYear;
      }
      return true;
    });
  };

  const getLastId = (_expenses) => {
    let id = 0;
    _expenses.forEach(exp => {
      if (exp.id > id) {
        id = exp.id;
      }
    });
    return id;
  };

  useEffect(() => {
    const newFilteredExpenses = filterExpenses(expenses, filters);
    setFilteredExpenses(newFilteredExpenses);
  }, [expenses, filters]);

  useEffectOnce(() => {
    setLastId(getLastId(expenses));
  }, [expenses], () => true);

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
    setExpense({ ...filteredExpenses[index] });
    openFormIfClose();
  };

  const onDeleteExpense = (index) => {
    setExpenses(expenses.filter((exp, i) => i !== index));
  };

  const onToggleForm = (forcedState) => {
    setIsFormOpen(forcedState ?? !isFormOpen);
  };

  const onToggleFilters = (forcedState) => {
    setIsFiltersOpen(forcedState ?? !isFiltersOpen);
  };

  const onSelectFilters = (filters) => {
    setFilters(filters);
    setIsFiltersOpen(false);
  };

  const onClearFilters = () => {
    setFilters(null);
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

      <ExpensesChart
        expenses={filteredExpenses}
      />

      <ExpenseForm
        expense={expense}
        onSubmit={onSubmitExpenseForm}
        onCancel={onCancelExpenseForm}
        isOpen={isFormOpen}
        toggleOpen={onToggleForm}
      />

      <ExpensesFilters
        filters={filters}
        onSelectFilters={onSelectFilters}
        onClearFilters={onClearFilters}
        isOpen={isFiltersOpen}
        toggleOpen={onToggleFilters}
      />

      <ExpensesList
        expenses={filteredExpenses}
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
