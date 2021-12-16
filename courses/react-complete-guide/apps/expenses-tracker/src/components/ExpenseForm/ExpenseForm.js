import { Button } from '../Ui';
import { formatDate } from '../../utils';
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

  const onSubmit = (e) => {
    e.preventDefault();
    const submittedExpense = {
      title: form.title,
      amount: form.amount,
      date: new Date(form.date).getTime(),
    };
    propOnSubmit(submittedExpense);
  };

  return (
    <form className="expense-form" onSubmit={onSubmit}>

      {/* Title */}
      <div className="expense-form__control">
        <input
          type="text"
          value={form.title}
          onChange={e => updateForm('title', e.target.value)}
        />
      </div>

      {/* Date */}
      <div className="expense-form__control">
        <input
          type="date"
          value={form.date}
          onChange={e => updateForm('date', e.target.value)}
        />
      </div>

      {/* Amount */}
      <div className="expense-form__control">
        <input
          type="number"
          value={form.amount}
          onChange={e => updateForm('amount', e.target.value)}
        />
      </div>

      {/* Submit */}
      <div className="expense-form__control">
        <Button fille="outline" type="button" onClick={onCancel}>
          Cancel
        </Button>
        <Button fill="solid" type="submit">
          {expense ? 'Update' : 'Create'}
        </Button>
      </div>

    </form>
  );
};
