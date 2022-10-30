import { FormEvent, useRef } from 'react';

import css from '../styles/home.module.css';

export default function Home() {

  const emailRef = useRef<HTMLInputElement | null>(null);
  const feedbackRef = useRef<HTMLTextAreaElement | null>(null);

  async function submitFeedbackForm(event: FormEvent) {
    event.preventDefault();
    event.stopPropagation();

    const email = (emailRef.current as HTMLInputElement).value;
    const feedback = (feedbackRef.current as HTMLTextAreaElement).value;
    const formValue = { email, feedback };

    const res = await fetch('/api/feedback', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValue),
    });
    const content = await res.json();

    console.log('submitFeedbackForm', content);
  }

  return (
    <main>
      <h1>The Home Page</h1>
      <form onSubmit={submitFeedbackForm}>

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
    </main>
  )
}
