'use client';

export default function IssueDetailsErrorPage({ error }: any) {
  console.log('################################### ERROR', error);
  const issueId = 42; // TODO
  return <p>No issue with ID {issueId}</p>
}
