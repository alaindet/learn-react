import './ExpenseItems.css';

export const ExpenseItems = ({ children }) => {
  return (
    <div className="expense-items">
      {children}
    </div>
  );
};
