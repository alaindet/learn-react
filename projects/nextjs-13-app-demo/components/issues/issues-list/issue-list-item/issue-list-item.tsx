import { Issue } from '@/types';
import Link from 'next/link';

import css from './issue-list-item.module.css';

interface IssueListItemProps {
  issue: Issue;
}

export function IssueListItem({ issue }: IssueListItemProps) {
  return (
    <li className={css.item}>
      <article>
        <h2>{issue.title}</h2>
        <p>{issue.summary}</p>
        <p><Link href={`/issues/${issue.id}`}>View details</Link></p>
      </article>
    </li>
  );
}
