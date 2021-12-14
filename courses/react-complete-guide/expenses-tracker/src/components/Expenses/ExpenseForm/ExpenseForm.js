import { useReducer, useState } from 'react';

import { formatAsDate } from '../../../utils';
import { Button, CardWithActions } from '../../Ui';
import './ExpenseForm.css';

const ACTION = {
  MINIMIZE: { name: 'minimize', label: 'Minimize' },
  MAXIMIZE: { name: 'maximize', label: 'Maximize' },
};

const FORM_FIELD = {
  TITLE: { name: 'expense-title', label: 'Title' },
  AMOUNT: { name: 'expense-amount', label: 'Amount' },
  DATE: { name: 'expense-date', label: 'Date' },
};

export const useExpenseForm = (initialState) => {
  // const names = Object.keys(FORM_FIELD).map(field => field.name);
  return useReducer(initialState, (state, action) => {
    console.log('useReducer', state, action);
    return state;
    // return names.includes(action.type)
    //   ? { ...state, [action.type]: action.value }
    //   : state;
  });
};

export const ExpenseForm = () => {

  const [isOpen, setIsOpen] = useState(true);
  const [actions, setActions] = useState([ACTION.MINIMIZE]);
  const [form, updateForm] = useExpenseForm({
    title: null,
    amount: null,
    date: null,
  });

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
    console.log('onSubmit'); // TODO
  };

  const onUpdateForm = (event, inputName) => {
    console.log('onUpdateForm', inputName, event.target.value); // TODO
    updateForm({ type: inputName, value: event.target.value });
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
            <label htmlFor={FORM_FIELD.TITLE.name}>
              {FORM_FIELD.TITLE.label}
            </label>
            <input
              type="text"
              id={FORM_FIELD.TITLE.name}
              value={form[FORM_FIELD.TITLE.name]}
              onChange={e => onUpdateForm(e, FORM_FIELD.TITLE.name)}
            />
          </div>

          {/* Amount */}
          <div className="expense-form__control">
            <label htmlFor={FORM_FIELD.AMOUNT.name}>
              {FORM_FIELD.AMOUNT.label}
            </label>
            <input
              type="text"
              id={FORM_FIELD.AMOUNT.name}
              value={form[FORM_FIELD.AMOUNT.name]}
              onChange={e => onUpdateForm(e, FORM_FIELD.AMOUNT.name)}
            />
          </div>

          {/* Date */}
          <div className="expense-form__control">
            <label htmlFor={FORM_FIELD.DATE.name}>
              {FORM_FIELD.DATE.label}
            </label>
            <input
              type="date"
              id={FORM_FIELD.DATE.name}
              min={aMonthAgo}
              max={inAMonth}
              value={form[FORM_FIELD.DATE.name]}
              onChange={e => onUpdateForm(e, FORM_FIELD.DATE.name)}
            />
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
