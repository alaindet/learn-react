export const useExpensesChart = (expenses) => {
  let totalAmount = 0;
  for (const expense of expenses) {
    totalAmount += expense.amount;
  }
  const amounts = {};
  for (let index = 0; index < 12; index++) {
    amounts[index] = 0;
  }
  for (const expense of expenses) {
    const monthIndex = (new Date(expense.date)).getMonth();
    amounts[monthIndex] += (expense.amount / totalAmount);
  }
  const chart = [];
  const d = new Date();
  d.setDate(1);
  for (const monthIndex of Object.keys(amounts)) {
    d.setMonth(parseInt(monthIndex));
    const monthName = d.toLocaleDateString('en-US', { month: 'short' });
    const label = monthName;
    const fractionValue = amounts[monthIndex];
    const value = (100 * fractionValue).toFixed(2) + '%';
    chart.push({ label, value });
  }
  return chart;
};
