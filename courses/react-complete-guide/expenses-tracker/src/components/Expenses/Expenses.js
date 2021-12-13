import { ExpenseItem } from '../ExpenseItem/ExpenseItem';
import './Expenses.css';

export const Expenses = ({ items }) => {
  return (
    <div className="expenses">
      {items.map(expense => (
        <ExpenseItem
          key={expense.title}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </div>
  );
};
