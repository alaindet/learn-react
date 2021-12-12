import { useFormatTimestamp } from '../../hooks';
import './ExpenseItem.css';

export const ExpenseItem = ({
  title,
  date,
  amount,
}) => {

  const formattedDate = useFormatTimestamp(date);

  return (
    <div className="expense-item">
      <div className="expense-item__date">{formattedDate}</div>
      <h2 className="expense-item__title">{title}</h2>
      <div className="expense-item__amount">{amount}€</div>
    </div>
  );
};
