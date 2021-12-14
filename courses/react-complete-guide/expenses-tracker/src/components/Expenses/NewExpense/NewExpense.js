import { ExpenseForm } from '../ExpenseForm/ExpenseForm';
import './NewExpense.css';

export const NewExpense = ({
  onCreateExpense,
}) => {
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={onCreateExpense} />
    </div>
  );
};
