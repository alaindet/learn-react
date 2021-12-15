import { useState } from 'react';

import { ExpenseItemActions } from '../ExpenseItemActions/ExpenseItemActions';
import './ExpenseItem.css';

export const ExpenseItem = ({
  date,
  title,
  amount,
}) => {
  const [isShowingActions, setIsShowingActions] = useState(false);

  if (isShowingActions) {
    return (
      <li className="expense-item">
        <ExpenseItemActions />
      </li>
    );
  }

  const d = new Date(date);
  const year = d.getFullYear();
  const month = d.toLocaleDateString('en-US', { month: 'short' });
  const day = d.getDate();

  return (
    <li className="expense-item">
      <div className="expense-item__date">
        <div className="date__year">{year}</div>
        <div className="date__month-day">{month} {day}</div>
      </div>
      <div className="expense-item__title">{title}</div>
      <div className="expense-item__amount">{amount} €</div>
    </li>
  );
};
