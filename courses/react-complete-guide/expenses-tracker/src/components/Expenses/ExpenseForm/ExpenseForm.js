import { formatAsDate } from '../../../utils';
import { Button, CardWithActions } from '../../Ui';
import { useExpenseForm, useCollapsablePanel } from './hooks';
import { FORM_FIELD, PANEL_ACTION } from './data';
import './ExpenseForm.css';

export const useDateRange = (center, radius) => {
  return [center - radius, center + radius];
};

export const ExpenseForm = ({
  onSaveExpense,
}) => {

  const [panel, togglePanel] = useCollapsablePanel(true);
  const [form, updateForm] = useExpenseForm({
    [FORM_FIELD.TITLE.name]: '',
    [FORM_FIELD.AMOUNT.name]: 0,
    [FORM_FIELD.DATE.name]: formatAsDate(Date.now()),
  });
  const [from, to] = useDateRange(new Date().getTime(), 1000 * 60 * 60 * 24 * 30);

  const cssClasses = [
    'expense-form',
    panel.isOpen ? '--open' : '--closed',
  ].join(' ');

  const onPanelActionClick = (actionName) => {
    switch (actionName) {
      case PANEL_ACTION.MAXIMIZE.name:
        togglePanel(false);
        break;
      case PANEL_ACTION.MINIMIZE.name:
        togglePanel(true);
        break;
      default:
        break;
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const item = {
      title: form['expense-title'],
      date: new Date(form['expense-date']).getTime(),
      amount: parseFloat(form['expense-amount']),
    };
    onSaveExpense(item);
  };

  const onUpdateForm = (event, inputName) => {
    updateForm({ type: inputName, value: event.target.value });
  };

  return (
    <CardWithActions
      actions={panel.actions}
      onActionClick={onPanelActionClick}
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
              type="number"
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
              min={formatAsDate(from)}
              max={formatAsDate(to)}
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
