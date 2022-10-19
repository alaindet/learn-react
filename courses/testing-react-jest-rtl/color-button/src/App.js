import { useMemo, useState } from 'react';

import './App.css';

function getOppositeColor(color) {
  return color === 'red' ? 'blue' : 'red';
}

export function App() {

  const [color, setColor] = useState('red');
  const [enabled, setEnabled] = useState(false);
  const nextColor = useMemo(() => getOppositeColor(color), [color]);
  const flipColor = () => setColor(nextColor);

  return (
    <div className="app">
      <button type="button" style={{backgroundColor: color}} onClick={flipColor}>
        Change to {nextColor}
      </button>
      <input
        type="checkbox"
        name="button-activation"
        value={enabled}
        onChange={e => setEnabled(e.target.checked)}
      />
    </div>
  );
}
