import { useState } from 'react';

import { formatAsDate } from '../../../utils';
import { Button, CardWithActions } from '../../Ui';
import './ExpenseForm.css';

const ACTION = {
  MINIMIZE: { name: 'minimize', label: 'Minimize' },
  MAXIMIZE: { name: 'maximize', label: 'Maximize' },
};

export const ExpenseForm = () => {

  // TODO: Single state?
  const [isOpen, setIsOpen] = useState(true);
  const [actions, setActions] = useState([ACTION.MINIMIZE]);

  const now = new Date().getTime();
  const aMonth = 1000 * 60 * 60 * 24 * 30;
  const aMonthAgo = formatAsDate(now - aMonth);
  const inAMonth = formatAsDate(now + aMonth);
  const cssClasses = [
    'expense-form',
    isOpen ? '--open' : '--closed',
  ].join(' ');

  const onActionClick = (actionName) => {
    switch (actionName) {
      case ACTION.MAXIMIZE.name:
        setIsOpen(true);
        setActions([ACTION.MINIMIZE]);
        break;
      case ACTION.MINIMIZE.name:
        setIsOpen(false);
        setActions([ACTION.MAXIMIZE]);
        break;
      default:
        break;
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('onSubmit');
  };

  return (
    <CardWithActions
      actions={actions}
      onActionClick={onActionClick}
    >
      <form className={cssClasses} onSubmit={onSubmit}>
        <div className="expense-form__controls">

          {/* Title */}
          <div className="expense-form__control">
            <label htmlFor="expense-title">Title</label>
            <input type="text" id="expense-title" />
          </div>

          {/* Amount */}
          <div className="expense-form__control">
            <label htmlFor="expense-amount">Amount</label>
            <input type="number" min="0.01" step="0.01" id="expense-amount" />
          </div>

          {/* Date */}
          <div className="expense-form__control">
            <label htmlFor="expense-date">Date</label>
            <input type="date" min={aMonthAgo} max={inAMonth} id="expense-date" />
          </div>

          {/* Save */}
          <div className="expense-form__control --no-bg">
            <Button type="submit">Save</Button>
          </div>

        </div>
      </form>
    </CardWithActions>
  );
};
