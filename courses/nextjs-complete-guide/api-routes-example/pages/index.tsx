import { FormEvent, useRef, useState } from 'react';

import { Response } from '../types';
import { Feedback } from '../features/feedbacks';
import css from '../styles/home.module.css';

export default function Home() {

  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [sentFeedback, setSentFeedback] = useState<Feedback | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const feedbackRef = useRef<HTMLTextAreaElement | null>(null);

  async function handleFetchFeedbacks() {
    const res = await fetchFeedbacks();
    setFeedbacks(res.data);
  }

  async function handleSubmitFeedbackForm(event: FormEvent) {
    event.preventDefault();
    event.stopPropagation();
    const email = (emailRef.current as HTMLInputElement).value;
    const feedback = (feedbackRef.current as HTMLTextAreaElement).value;
    const res = await saveFeedback(email, feedback);
    setSentFeedback(res.data);
  }

  if (!!sentFeedback) {
    return (
      <main>
        <h1>API Routes example</h1>
        <p>Thank you for your feedback</p>
        <ul>
          <li><strong>ID:</strong> {sentFeedback.id}</li>
          <li><strong>From:</strong> {sentFeedback.email}</li>
          <li><strong>Feedback:</strong> {sentFeedback.text}</li>
        </ul>
      </main>
    );
  }

  return (
    <main>
      <h1>API Routes example</h1>
      <form onSubmit={handleSubmitFeedbackForm}>

        {/* Email */}
        <div className={css['form-control']}>
          <label htmlFor="email">Your Email</label>
          <input ref={emailRef} type="email" id="email" />
        </div>

        {/* Message */}
        <div className={css['form-control']}>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea ref={feedbackRef} id="feedback"></textarea>
        </div>

        {/* Submit */}
        <div className={css['form-control']}>
          <button type="submit">Send feedback</button>
        </div>

      </form>

      <div>
        <button type="button" onClick={handleFetchFeedbacks}>
          Fetch feedbacks
        </button>
        {feedbacks && (
          <ul>
            {feedbacks.map(feedback => (
              <li key={feedback.id}>
                <em>{feedback.email}</em>
                ✍&nbsp;
                {feedback.text}
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  )
}

async function saveFeedback(email: string, feedback: string): Promise<Response<Feedback>> {
  const rawResponse = await fetch('/api/feedbacks', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, feedback }),
  });
  return await rawResponse.json();
}

async function fetchFeedbacks(): Promise<Response<Feedback[]>> {
  const rawResponse = await fetch('/api/feedbacks');
  return await rawResponse.json();
}
