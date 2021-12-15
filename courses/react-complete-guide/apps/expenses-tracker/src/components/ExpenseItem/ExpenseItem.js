import { useState } from 'react';
import { ExpenseItemActions } from '../ExpenseItemActions/ExpenseItemActions';

import './ExpenseItem.css';

export const ExpenseItem = ({ expense }) => {
  const [isShowingActions, setIsShowingActions] = useState(false);

  return (
    <li className="expense-item">
      {isShowingActions ? <ExpenseItemActions /> : (
        <p>Expense item</p>
      )}
    </li>
  );
};
