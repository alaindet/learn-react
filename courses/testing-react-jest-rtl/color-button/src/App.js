import { useMemo, useState } from 'react';

import './App.css';

export function App() {

  const [color, setColor] = useState<'red' | 'blue'>('red');
  const nextColor = useMemo(() => color === 'red' ? 'blue' : 'red', [color]);
  const flipColor = () => setColor(nextColor);

  return (
    <div className="app">
      <button type="button" style={{backgroundColor: color}} onClick={flipColor}>
        Change to {nextColor}
      </button>
    </div>
  );
}
