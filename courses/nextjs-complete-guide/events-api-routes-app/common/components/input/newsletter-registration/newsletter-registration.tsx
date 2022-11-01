import { FormEvent, useRef } from 'react';

import { postJson, validateEmail } from '@/common/utils';
import css from './newsletter-registration.module.css';

export function NewsletterRegistration() {

  const emailRef = useRef<HTMLInputElement | null>(null);

  async function handleSubscription(event: FormEvent) {
    event.preventDefault();
    const email = emailRef.current?.value ?? '';
    if (!email || !validateEmail(email)) alert('Invalid email');
    await postJson('/api/newsletter', { email });
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
