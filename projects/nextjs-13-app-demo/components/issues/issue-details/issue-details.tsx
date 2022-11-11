
import { Issue } from '@/types';
import css from './issue-details.module.css';

interface IssueDetailsProps {
  issue: Issue;
}

export function IssueDetails({ issue }: IssueDetailsProps) {
  return (
    <article className={css.details}>
      <header>
        <h1>{issue.title}</h1>
        <p>{issue.summary}</p>
      </header>
      <p>{issue.description}</p>
    </article>
  );
}
