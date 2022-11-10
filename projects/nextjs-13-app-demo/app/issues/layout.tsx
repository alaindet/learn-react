import { ReactNode } from 'react';

import { IssuesList } from '@/components/issues';
import css from './layout.module.css';

export default function IssuesLayout({ children }: { children: ReactNode }) {
  return (
    <div className={css.layout}>
      <aside className={css.sidebar}>
        <IssuesList issues={[]} />
      </aside>
      {children}
    </div>
  );
}
