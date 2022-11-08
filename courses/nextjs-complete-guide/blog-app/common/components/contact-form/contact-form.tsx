import { FormEvent, useState } from 'react';

import css from './contact-form.module.css';

export interface ContactFormData {
  email: string;
  name: string;
  message: string;
}

const DEFAULT_FORM_STATE: ContactFormData = {
  email: '',
  name: '',
  message: '',
};

interface ContactFormProps {
  onSubmit: (formState: ContactFormData) => void;
}

export function ContactForm({ onSubmit }: ContactFormProps) {

  const [formState, setFormState] = useState<ContactFormData>(DEFAULT_FORM_STATE);

  function setFormControl(name: string): (event: FormEvent) => void {
    return (event: FormEvent) => {
      const val = (event.target as HTMLInputElement).value;
      setFormState(formState => ({ ...formState, [name]: val }));
    };
  }

  async function handleSendForm(event: FormEvent) {
    event.preventDefault();
    event.stopPropagation();

    if (!formState.email || !formState.name || !formState.message) {
      return;
    }

    onSubmit(formState);
  }

  return (
    <section className={css.contact}>
      <h1>Let's keep in touch.</h1>
      <form className={css.form} onSubmit={handleSendForm}>
        <div className={css.controls}>

          {/* Email */}
          <div className={css.control}>
            <label htmlFor="the-email">Your email</label>
            <input
              value={formState['email']}
              onChange={setFormControl('email')}
              type="email"
              id="the-email" required
            />
          </div>

          {/* Name */}
          <div className={css.control}>
            <label htmlFor="the-name">Your name</label>
            <input
              value={formState['name']}
              onChange={setFormControl('name')}
              type="text"
              id="the-name" required
            />
          </div>
        </div>

        {/* Message */}
        <div className={css.control}>
          <label htmlFor="the-message">Your message</label>
          <textarea
            value={formState['message']}
            onChange={setFormControl('message')}
            id="the-message"
            required
          />
        </div>

        <div className={css.actions}>
          <button type="submit">Send</button>
        </div>

      </form>
    </section>
  );
}
