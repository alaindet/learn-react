import { ExpenseItemDate } from '../ExpenseItemDate/ExpenseItemDate';
import { Card } from '../../Ui';
import './ExpenseItem.css';

export const ExpenseItem = ({
  title,
  date,
  amount,
  onClick,
}) => {
  return (
    <Card className="expense" onClick={onClick}>
      <ExpenseItemDate date={date} />
      <h2 className="expense__title">{title}</h2>
      <Card className="expense__amount">€ {amount}</Card>
    </Card>
  );
};