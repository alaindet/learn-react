import { FormEvent, useRef } from 'react';

import { httpPost } from '@/common/http';
import css from './contact-form.module.css';

export function ContactForm() {

  const emailRef = useRef<HTMLInputElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);

  async function handleSendForm(event: FormEvent) {

    console.log('handleSendForm');

    event.preventDefault();
    event.stopPropagation();

    const email = emailRef.current?.value ?? '';
    const name = nameRef.current?.value ?? '';
    const message = messageRef.current?.value ?? '';

    // TODO: Validation
    if (!email || !name || !message) {
      return;
    }

    const payload = { email, name, message };
    const res = await httpPost('/api/contact', payload);
    alert(res.message);
  }

  return (
    <section className={css.contact}>
      <h1>Let's keep in touch.</h1>
      <form className={css.form} onSubmit={handleSendForm}>
        <div className={css.controls}>

          {/* Email */}
          <div className={css.control}>
            <label htmlFor="the-email">Your email</label>
            <input type="email" id="the-email" required />
          </div>

          {/* Name */}
          <div className={css.control}>
            <label htmlFor="the-name">Your name</label>
            <input type="text" id="the-name" required />
          </div>

          {/* Message */}
          <div className={css.control}>
            <label htmlFor="the-message">Your message</label>
            <textarea id="the-message" required />
          </div>

          <div className={css.actions}>
            <button type="submit">Send</button>
          </div>

        </div>
      </form>
    </section>
  );
}
