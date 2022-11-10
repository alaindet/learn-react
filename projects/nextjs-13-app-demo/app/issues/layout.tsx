import { ReactNode } from 'react';

import { Issue } from '@/types';
import { IssuesList } from '@/components/issues';
import css from './layout.module.css';

export default async function IssuesLayout({ children }: { children: ReactNode }) {

  const issues = await getIssues();

  return (
    <div className={css.layout}>
      <aside className={css.sidebar}>
        <IssuesList issues={issues} />
      </aside>
      {children}
    </div>
  );
}

async function getIssues(): Promise<Issue[]> {
  const url = 'http://localhost:3001/issues';
  const rawRes = await fetch(url);
  const data = await rawRes.json();
  console.log('getIssues', data);
  return data as Issue[];
}
