import { ExpenseItem } from '../ExpenseItem/ExpenseItem';
import './ExpensesList.css';

export const ExpensesList = ({
  expenses,
  onCancelEdit,
  onEditExpense,
  onDeleteExpense,
  onActivateItem,
  activeItemIndex,
}) => {
  return (
    <section className="expenses">
      <ul>
        {expenses.map((expense, index) => (
          <ExpenseItem
            key={index}
            index={index}
            isActive={index === activeItemIndex}
            onActivate={() => onActivateItem(index)}
            onCancel={() => onActivateItem(null)}
            onCancelEdit={onCancelEdit}
            onEdit={() => onEditExpense(index)}
            onDelete={() => onDeleteExpense(index)}
            {...expense}
          />
        ))}
      </ul>
    </section>
  );
};
