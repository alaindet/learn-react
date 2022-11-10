import { IssueDetails } from '@/components/issues';
import { Issue } from '@/types';

export default async function IssueDetailsPage() {

  const issueId = 1; // TODO
  const issue = await getIssue(issueId);

  return <IssueDetails issue={issue} />;
}

async function getIssue(issueId: Issue['id']): Promise<Issue> {
  return {
    id: 1,
    title: 'Lorem',
    summary: 'Lorem',
    description: 'Lorem',
  };
}
