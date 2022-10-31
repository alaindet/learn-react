import { FormEvent, useRef } from 'react';

import css from './newsletter-registration.module.css';

export function NewsletterRegistration() {

  const emailRef = useRef<HTMLInputElement | null>(null);

  async function handleSubscription(event: FormEvent) {
    event.preventDefault();
    const email = emailRef.current?.value ?? '';
    if (!email) return;
    // TODO: Validate email...
    await subscribeToNewsletter(email);
    // TODO: Alert
    alert('You subscribed to NextEvents');
  }

  return (
    <section className={css.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={handleSubscription}>
        <div className={css.control}>
          <input
            type="email"
            ref={emailRef}
            id="email"
            placeholder="Your email"
            aria-label="Your email"
          />
          <button type="submit">Subscribe</button>
        </div>
      </form>
    </section>
  );
}

async function subscribeToNewsletter(email: string): Promise<void> {
  const rawResponse = await fetch('/api/newsletter', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });
  return await rawResponse.json();
}
