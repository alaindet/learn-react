import { Feedback, fetchFeedbacks } from '../features/feedbacks';

interface FeedbacksPageProps {
  feedbacks: Feedback[];
}

export default function FeedbacksPage({ feedbacks }: FeedbacksPageProps) {
  return (
    <>
      <h1>Feedbacks page</h1>
      <ul>
        {feedbacks.map(feedback => (
          <li key={feedback.id}>
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
