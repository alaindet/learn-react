import { Button } from '../../Ui';
import './SelectedExpense.css';

export const SelectedExpense = ({ item, onClick }) => {
  return (
    <div className="selected-expense">
      <Button onClick={onClick} color="primary" size="large">
        {item.title} &times;
      </Button>
    </div>
  );
};
