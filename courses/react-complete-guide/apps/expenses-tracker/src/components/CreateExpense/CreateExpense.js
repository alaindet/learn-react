import { MdAdd } from 'react-icons/md';

import { CircleButton } from '../Ui';
import './CreateExpense.css';

export const CreateExpense = () => {

  return (
    <div className="create-expense">
      <CircleButton size="large">
        <MdAdd />
      </CircleButton>
    </div>
  );
};
