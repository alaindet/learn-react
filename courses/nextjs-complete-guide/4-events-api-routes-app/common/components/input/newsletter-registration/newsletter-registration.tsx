import { FormEvent, useContext, useRef } from 'react';

import { NotificationContext } from '@/core/context';
import { postJson, validateEmail } from '@/common/utils';
import css from './newsletter-registration.module.css';

export function NewsletterRegistration() {

  const notification = useContext(NotificationContext);
  const emailRef = useRef<HTMLInputElement | null>(null);

  async function handleSubscription(event: FormEvent) {
    event.preventDefault();
    try {
      notification.pending('Loading', 'Subscribing to the newsletter...');
      const email = emailRef.current?.value ?? '';
      if (!email || !validateEmail(email)) alert('Invalid email');
      await postJson('/api/newsletter', { email });
      notification.success('Success', 'You subscribed to NextEvents newsletter');
    } catch (err) {
      notification.error('Error', 'Could not subscribe to NextEvents newsletter');
    }
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
