import { useState } from 'react';

import { ExpenseItem } from '../ExpenseItem/ExpenseItem';
import './ExpensesList.css';

export const ExpensesList = ({
  expenses,
  onSelectExpense,
  onDeleteExpense,
}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="expenses">
      <ul>
        {expenses.map((expense, index) => (
          <ExpenseItem
            key={index}
            index={index}
            isActive={index === activeIndex}
            onActivate={() => setActiveIndex(index)}
            onCancel={() => setActiveIndex(null)}
            onEdit={() => onSelectExpense(index)}
            onDelete={() => onDeleteExpense(index)}
            {...expense}
          />
        ))}
      </ul>
    </section>
  );
};
