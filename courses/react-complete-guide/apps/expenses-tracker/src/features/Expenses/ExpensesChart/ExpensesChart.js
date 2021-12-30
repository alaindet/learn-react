import { useExpensesChart } from './use-expenses-chart';
import './ExpensesChart.css';

export const ExpensesChart = ({
  expenses,
}) => {
  const chart = useExpensesChart(expenses);

  return (
    <div className="expenses-chart">
      <div className="expenses-chart__items ya-cols">
        {chart.map(chartItem => {
          const barValueStyle = { height: chartItem.value };
          return (
            <div key={chartItem.label} className="expenses-chart__item ya-col-1">
              <div className="item__bar">
                <div className="item__bar__value" style={barValueStyle}></div>
              </div>
              <div className="item__label">{chartItem.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
