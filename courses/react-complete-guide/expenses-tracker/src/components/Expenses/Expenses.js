import { ExpenseItem } from '../ExpenseItem/ExpenseItem';
import './Expenses.css';

export const Expenses = ({
  items,
  onItemClick,
}) => {
  return (
    <div className="expenses">
      {items.map((expense, index) => (
        <ExpenseItem
          key={expense.title}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
          onClick={() => onItemClick(index)}
        />
      ))}
    </div>
  );
};
