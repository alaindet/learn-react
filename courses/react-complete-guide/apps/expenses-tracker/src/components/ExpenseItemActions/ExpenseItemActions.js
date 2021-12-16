import { useState } from 'react';

import { Button } from '../Ui';
import './ExpenseItemActions.css';

const MODE = {
  CHOOSING: 'choosing',
  EDITING: 'editing',
  DELETING: 'deleting',
};

export const ExpenseItemActions = ({
  onCancel,
  onEdit,
  onDelete,
}) => {
  const [mode, setMode] = useState(MODE.CHOOSING);

  const onEditClicked = () => {
    setMode(MODE.EDITING);
    onEdit();
  };

  const onDeleteClicked = () => {
    setMode(MODE.DELETING);
  };

  const onDeleteConfirm = () => {
    setMode(MODE.CHOOSING);
    onDelete();
  };

  return (
    <div className="expense-item__actions">
      <Button fill="outline" type="button" onClick={onCancel}>Cancel</Button>

      {mode === MODE.EDITING && (
        <p>Editing...</p>
      )}

      {mode === MODE.DELETING && (
        <Button fill="solid" type="button" onClick={onDeleteConfirm}>Confirm delete</Button>
      )}

      {mode === MODE.CHOOSING && (
        <>
          <Button fill="solid" type="button" onClick={onEditClicked}>Edit</Button>
          <Button fill="solid" type="button" onClick={onDeleteClicked}>Delete</Button>
        </>
      )}
    </div>
  );
};
