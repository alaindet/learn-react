import { useState } from 'react';

import { Expenses } from './components';
import { MOCK_EXPENSES } from './mocks';
import './App.css';

export const App = () => {

  const [expenses] = useState(MOCK_EXPENSES);

  return (
    <div className="App">
      <h1>Expenses Tracker</h1>
      <Expenses items={expenses} />
    </div>
  );
}
