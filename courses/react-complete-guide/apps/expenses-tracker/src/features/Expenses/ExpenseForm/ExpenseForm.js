import { Button, Input, FormControl } from '../../../common/Ui';
import { formatDate } from '../../../utils';
import { useExpenseForm } from './hooks/expense-form';
import './ExpenseForm.css';

export const ExpenseForm = ({
  isOpen,
  expense,
  onSubmit: propOnSubmit,
  onCancel,
}) => {
  const [form, updateForm] = useExpenseForm({
    title: expense?.title ?? '',
    amount: expense?.amount ?? 0,
    date: formatDate('y-m-d', expense?.date ?? Date.now()),
  });

  const isFormValid = (form) => {
    // TODO: Validation
    return (
      form?.title &&
      form?.amount &&
      form?.date
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid(form)) {
      return;
    }

    const submittedExpense = {
      title: form.title,
      amount: form.amount,
      date: new Date(form.date).getTime(),
    };

    propOnSubmit(submittedExpense);
  };

  return (
    <form className="expense-form ya-cols" onSubmit={onSubmit}>

      {/* Title */}
      <FormControl className="ya-col-12">
        <label htmlFor="expense-title">Title</label>
        <Input
          type="text"
          value={form.title}
          id="expense-title"
          fullWidth
          size="large"
          placeholder="Expense title..."
          onChange={e => updateForm('title', e.target.value)}
        />
      </FormControl>

      {/* Date */}
      <FormControl className="ya-col-6 form-control-inline --left">
        <label htmlFor="expense-date">Date</label>
        <Input
          type="date"
          value={form.date}
          fullWidth
          id="expense-date"
          onChange={e => updateForm('date', e.target.value)}
        />
      </FormControl>

      {/* Amount */}
      <FormControl className="ya-col-6 form-control-inline --right">
        <label htmlFor="expense-amount">Amount</label>
        <Input
          type="number"
          value={form.amount}
          id="expense-amount"
          fullWidth
          placeholder="Expense amunt..."
          onChange={e => updateForm('amount', e.target.value)}
        />
      </FormControl>

      {/* Submit */}
      <FormControl className="expense-form__submit ya-col-12">
        <Button fille="outline" type="button" onClick={onCancel}>
          Cancel
        </Button>
        &nbsp;
        <Button fill="solid" type="submit">
          {expense ? 'Update' : 'Create'}
        </Button>
      </FormControl>

    </form>
  );
};
