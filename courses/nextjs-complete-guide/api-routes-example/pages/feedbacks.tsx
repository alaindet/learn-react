import { useState } from 'react';

import { Feedback, fetchFeedbacks } from '../features/feedbacks';

interface FeedbacksPageProps {
  feedbacks: Feedback[];
}

export default function FeedbacksPage({ feedbacks }: FeedbacksPageProps) {

  const [details, setDetails] = useState<Feedback | null>(null);

  async function handleShowFeedbackDetails(index: number) {
    const id = feedbacks[index].id;
    const rawResponse = await fetch(`/api/feedbacks/${id}`);
    const feedbackDetails = (await rawResponse.json()).data;
    setDetails(feedbackDetails);
  }

  return (
    <>
      <h1>Feedbacks page</h1>

      {details && (
        <div>
          <button type="button" onClick={() => setDetails(null)}>
            &times; Dismiss
          </button>
          <ul>
            <li><strong>ID:</strong> {details.id}</li>
            <li><strong>Email:</strong> {details.email}</li>
            <li><strong>Text:</strong> {details.text}</li>
          </ul>
        </div>
      )}

      <ul>
        {feedbacks.map((feedback, i) => (
          <li key={feedback.id}>
            <button type="button" onClick={() => handleShowFeedbackDetails(i)}>
              Show Details
            </button>
            &nbsp;
            <em>{feedback.email}</em>
            ✍&nbsp;
            {feedback.text}
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  // Instead of performing an HTTP request (perfectly valid) to some internal
  // API route, just reuse the logic and avoid a round trip
  const feedbacks = await fetchFeedbacks();
  const props = { feedbacks } as FeedbacksPageProps;
  const ONE_HOUR = 60 * 60;
  return { props, revalidate: ONE_HOUR };
}
