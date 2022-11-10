import { Issue } from '@/types';
import { IssueListItem } from './issue-list-item/issue-list-item';
import css from './issues-list.module.css';

interface IssuesListProps {
  issues: Issue[];
}

export function IssuesList({ issues }: IssuesListProps) {
  return (
    <ul className={css.list}>
      {issues.map(issue => <IssueListItem key={issue.id} issue={issue} />)}
    </ul>
  );
}
