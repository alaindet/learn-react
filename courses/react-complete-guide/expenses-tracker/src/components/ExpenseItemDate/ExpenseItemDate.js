import './ExpenseItemDate.css';

export const ExpenseItemDate = ({ date }) => {

  const d = new Date(date);
  const locale = 'en-US';
  const year = d.getFullYear();
  const month = d.toLocaleDateString(locale, { month: 'short' });
  const day = d.getDate();

  return (
    <div className="expense__date">
      <div className="date__year">{year}</div>
      <div className="date__month_day">{month}&nbsp;{day}</div>
    </div>
  );
};
