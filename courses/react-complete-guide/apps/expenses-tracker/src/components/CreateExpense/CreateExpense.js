import { MdAdd } from 'react-icons/md';

import { CircleButton } from '../Ui';
import './CreateExpense.css';

export const CreateExpense = ({ onClick }) => {
  return (
    <div className="create-expense">
      <CircleButton size="large" onClick={onClick}>
        <MdAdd />
      </CircleButton>
    </div>
  );
};
