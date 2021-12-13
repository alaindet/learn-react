import { ExpenseItemDate } from '../ExpenseItemDate/ExpenseItemDate';
import { Card } from '../Card/Card';
import './ExpenseItem.css';

export const ExpenseItem = ({
  title,
  date,
  amount,
}) => {
  return (
    <Card className="expense">
      <ExpenseItemDate date={date} />
      <h2 className="expense__title">{title}</h2>
      <Card className="expense__amount">€ {amount}</Card>
    </Card>
  );
};
