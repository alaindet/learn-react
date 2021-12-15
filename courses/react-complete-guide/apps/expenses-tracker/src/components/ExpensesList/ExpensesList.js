import { ExpenseItem } from '../ExpenseItem/ExpenseItem';
import './ExpensesList.css';

export const ExpensesList = ({
  expenses,
}) => {
  return (
    <section className="expenses">
      <ul>
        {expenses.map((expense, index) => (
          <ExpenseItem key={index} {...expense} />
        ))}
      </ul>
    </section>
  );
};
