import { Button } from '../Ui';
import './ExpenseItemActions.css';

export const ExpenseItemActions = ({
  onCancel,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="expense-item__actions">
      <Button fill="outline" type="button" onClick={onCancel}>Cancel</Button>
      <Button fill="solid" type="button" onClick={onEdit}>Edit</Button>
      <Button fill="solid" type="button" onClick={onDelete}>Delete</Button>
    </div>
  );
};
