import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';

import { httpPost } from '@/common/http';
import { ContactForm, ContactFormData } from '@/common/components/contact-form/contact-form';
import { Notification } from '@/common/components/notification/notification';

interface NotificationType {
  title: string;
  message: string;
  status: 'success' | 'error' | 'pending';
}

export default function ContactPage() {

  const notifTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [notif, setNotif] = useState<NotificationType | null>(null);

  useEffect(() => {
    if (notif !== null) {
      notifTimer.current = setTimeout(handleNotificationDismiss, 2000);
      return () => {
        if (notifTimer.current !== null) {
          clearTimeout(notifTimer.current);
        }
      };
    }
  }, [notif]);

  function handleNotificationDismiss() {
    setNotif(null);
  }

  async function handleFormSubmit(formData: ContactFormData) {

    setNotif({
      title: 'Loading',
      message: 'Sending message to the server',
      status: 'pending',
    });

    try {
      const res = await httpPost('/api/contact', formData);
      setNotif({
        title: 'Success',
        message: 'Message successfully sent',
        status: 'success',
      });
    }

    catch (err) {
      setNotif({
        title: 'Error',
        message: 'Cannot send message to the server',
        status: 'error',
      });
    }
  }

  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact me via this form" />
      </Head>
      <h1>Contact page</h1>
      <ContactForm onSubmit={handleFormSubmit} />
      {!!notif && (
        <Notification
          title={notif.title}
          message={notif.message}
          status={notif.status}
          onDismiss={handleNotificationDismiss}
        />
      )}
    </>
  );
}
