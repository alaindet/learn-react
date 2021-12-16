import { useState } from 'react';

import { Button } from '../../../common/Ui';
import './ExpenseItemActions.css';

const MODE = {
  CHOOSING: 'choosing',
  EDITING: 'editing',
  DELETING: 'deleting',
};

export const ExpenseItemActions = ({
  onCancel,
  onEdit: propOnEdit,
  onDelete: propOnDelete,
}) => {
  const [mode, setMode] = useState(MODE.CHOOSING);

  const onEdit= () => {
    setMode(MODE.EDITING);
    propOnEdit();
  };

  const onDelete = () => {
    setMode(MODE.DELETING);
  };

  const onDeleteConfirm = () => {
    setMode(MODE.CHOOSING);
    propOnDelete();
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
          <Button fill="solid" type="button" onClick={onEdit}>Edit</Button>
          <Button fill="solid" type="button" onClick={onDelete}>Delete</Button>
        </>
      )}
    </div>
  );
};
