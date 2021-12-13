import { ExpenseItemDate } from '../ExpenseItemDate/ExpenseItemDate';
import './ExpenseItem.css';

export const ExpenseItem = ({
  title,
  date,
  amount,
}) => {
  return (
    <div className="expense">
      <ExpenseItemDate date={date} />
      <h2 className="expense__title">{title}</h2>
      <div className="expense__amount">€ {amount}</div>
    </div>
  );
};
