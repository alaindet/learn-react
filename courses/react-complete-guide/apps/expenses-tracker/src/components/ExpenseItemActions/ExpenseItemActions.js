import './ExpenseItemActions.css';

export const ExpenseItemActions = ({
  onEdit,
  onDelete,
}) => {
  return (
    <div className="expense-item__actions">
      <button type="button" onClick={onEdit}>Edit</button>
      <button type="button" onClick={onDelete}>Delete</button>
    </div>
  );
};
