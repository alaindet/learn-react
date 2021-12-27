import { useState } from 'react';

import { Button } from '../../../common/components/Ui';
import './ExpenseItemActions.css';

const MODE = {
  CHOOSING: 'choosing',
  EDITING: 'editing',
  DELETING: 'deleting',
};

export const ExpenseItemActions = ({
  onCancel,
  onCancelEdit,
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

      {mode === MODE.EDITING && (
        <>
          <Button fill="outline" type="button" onClick={onCancelEdit}>Cancel</Button>
          <p>Editing...</p>
        </>
      )}

      {mode === MODE.DELETING && (
        <>
          <Button fill="outline" type="button" onClick={onCancel}>Cancel</Button>
          <Button fill="solid" type="button" onClick={onDeleteConfirm}>
            Confirm delete?
          </Button>
        </>
      )}

      {mode === MODE.CHOOSING && (
        <>
          <Button fill="outline" type="button" onClick={onCancel}>Cancel</Button>
          <Button fill="solid" type="button" onClick={onEdit}>Edit</Button>
          <Button fill="solid" type="button" onClick={onDelete}>Delete</Button>
        </>
      )}
    </div>
  );
};
