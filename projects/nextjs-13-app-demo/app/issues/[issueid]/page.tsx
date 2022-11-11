import { IssueDetails } from '@/components/issues';
import { Issue } from '@/types';

interface IssueDetailsPageProps {
  params: {
    issueid: number;
  };
}

export default async function IssueDetailsPage({ params }: IssueDetailsPageProps) {

  const issueId = +params.issueid;
  const issue = await getIssue(issueId);

  // TODO: Remove
  console.log('issue', issue);

  if (issue === null) {
    throw new Error(`No issue found with id ${issueId}`);
  }

  return <IssueDetails issue={issue} />;
}

async function getIssue(issueId: Issue['id']): Promise<Issue | null> {
  try {
    const url = `http://localhost:3001/issues/${issueId}`;
    const rawRes = await fetch(url);
    const data = await rawRes.json();
    if (!Object.keys(data)?.length) {
      return null;
    }
    return data as Issue;
  } catch (err) {
    return null;
  }
}
