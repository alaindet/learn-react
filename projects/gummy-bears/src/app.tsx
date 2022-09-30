import { useContext, useRef, useEffect } from 'react';

import { GummyBearsList } from './components/gummy-bears-list/gummy-bears-list';
import { GummyBearsContext } from './contexts';
import { GummyBearForm } from './components/gummy-bear-form/gummy-bear-form';
import './app.scss';

export function App() {

  const ref = useRef<HTMLDivElement | null>(null);
  const ctx = useContext(GummyBearsContext);

  useEffect(() => {
    if (ref.current !== null) {
      const appWidth = parseFloat(getComputedStyle(ref.current).width);
      ctx.setItemWidth((appWidth - 32) / 10);
    }
  }, []);

  return (
    <div ref={ref} className="app">
      <h1>Gummy Bears</h1>

      <GummyBearForm
        item={ctx.editingItem}
      />

      <GummyBearsList
        items={ctx.items}
        onRemove={ctx.remove}
        onEdit={ctx.setEditingItem}
      />

    </div>
  );
}
