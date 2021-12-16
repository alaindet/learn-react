import { ExpenseItemActions } from '../ExpenseItemActions/ExpenseItemActions';
import './ExpenseItem.css';

export const ExpenseItem = ({
  date,
  title,
  amount,
  isActive,
  onActivate,
  onCancel,
  onEdit,
  onDelete,
}) => {

  if (isActive) {
    // TODO: Delete confirmation?
    return (
      <li className="expense-item --active">
        <ExpenseItemActions
          onCancel={onCancel}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </li>
    );
  }

  const d = new Date(date);
  const year = d.getFullYear();
  const month = d.toLocaleDateString('en-US', { month: 'short' });
  const day = d.getDate();

  return (
    <li className="expense-item" onClick={onActivate}>
      <div className="expense-item__date">
        <div className="date__year">{year}</div>
        <div className="date__month-day">{month} {day}</div>
      </div>
      <div className="expense-item__title">{title}</div>
      <div className="expense-item__amount">{amount} €</div>
    </li>
  );
};
