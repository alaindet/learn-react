import classNames from 'classnames';

import { FormControl, Button, Input } from '../../../common/components/Ui';
import { EXPENSE_FORM_SCHEMA as FORM_SCHEMA } from './form-schema';
import { useExpenseForm } from './use-expense-form';
import './ExpenseForm.css';

export const ExpenseForm = ({
  isOpen,
  toggleOpen,
  expense,
  onSubmit: propOnSubmit,
  onCancel,
}) => {
  const [formValue, formUpdate, formIsValid] = useExpenseForm(expense, FORM_SCHEMA);

  const onSetTitle = (event) => {
    formUpdate('title', event.target.value);
  };

  const onSetDate = (event) => {
    formUpdate('date', event.target.value);
  };

  const onSetAmount = (event) => {
    formUpdate('amount', parseFloat(event.target.value));
  };

  const onClickToggleContainer = () => {
    if (!isOpen) {
      toggleOpen(true);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }

    const submittedExpense = {
      title: formValue.title,
      amount: formValue.amount,
      date: new Date(formValue.date).getTime(),
    };

    if (!!expense?.id) {
      submittedExpense.id = expense?.id
    }

    propOnSubmit(submittedExpense);
    toggleOpen(false);
  };

  return (
    <form
      className={classNames({
        'expense-form ya-cols': true,
        '--open': isOpen,
      })}
      onSubmit={onSubmit}
    >
      {/* Title */}
      <FormControl className="expense-form__control ya-col-12">
        <label htmlFor="expense-title">Title</label>
        <Input
          type="text"
          value={formValue.title}
          id="expense-title"
          fullWidth
          size="large"
          placeholder="Expense title..."
          onChange={onSetTitle}
        />
      </FormControl>

      {/* Date */}
      <FormControl className="expense-form__control ya-col-12 ya-col-m-6 form-control-inline --left">
        <label htmlFor="expense-date">Date</label>
        <Input
          type="date"
          value={formValue.date}
          fullWidth
          id="expense-date"
          onChange={onSetDate}
        />
      </FormControl>

      {/* Amount */}
      <FormControl className="expense-form__control ya-col-12 ya-col-m-6  form-control-inline --right">
        <label htmlFor="expense-amount">Amount</label>
        <Input
          type="number"
          value={formValue.amount}
          id="expense-amount"
          fullWidth
          placeholder="Expense amunt..."
          onChange={onSetAmount}
        />
      </FormControl>

      {/* Submit */}
      <FormControl className="expense-form__submit ya-col-12">
        <Button fill="outline" type="button" onClick={onCancel}>
          Cancel
        </Button>
        &nbsp;
        <Button fill="solid" type="submit" isDisabled={!formIsValid}>
          {expense ? 'Update' : 'Create'}
        </Button>
      </FormControl>

      {/* Toggle */}
      <div
        className="expense-form__toggle-container"
        onClick={onClickToggleContainer}
      >
        <h2 className="expense-form__toggle-title">Form</h2>
        <button
          type="button"
          onClick={() => toggleOpen()}
          className="expense-form__toggle"
        ></button>
      </div>

    </form>
  );
};
