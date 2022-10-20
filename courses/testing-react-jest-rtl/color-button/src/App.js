import { useMemo, useState } from 'react';

import './App.css';

function getOppositeColor(color) {
  return color === 'red' ? 'blue' : 'red';
}

export function addSpacesToCamelCase(camel) {
  return camel.replace(/[A-Z]/g, ' $&').trim();
}

export function App() {

  const [color, setColor] = useState('red');
  const [enabled, setEnabled] = useState(true);
  const nextColor = useMemo(() => getOppositeColor(color), [color]);
  const flipColor = () => setColor(nextColor);

  return (
    <div className="app">

      {/* The button */}
      <button
        id="the-button"
        type="button"
        className={`-${color}`}
        onClick={flipColor}
        disabled={!enabled}
      >
        Change to {nextColor}
      </button>

      {/* The checkbox */}
      <input
        type="checkbox"
        id="button-activation"
        name="button-activation"
        checked={enabled}
        onChange={e => setEnabled(e.target.checked)}
      />
      <label htmlFor="button-activation">Enabled?</label>
    </div>
  );
}
