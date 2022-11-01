import { useContext } from 'react';

import { NotificationContext } from '@/core/context/notification.context';
import css from './notification.module.css';

export function TheNotification() {

  const { hide, notification } = useContext(NotificationContext);

  if (!notification) {
    return null;
  }

  const { title, message, status } = notification;

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = css.success;
  } else if (status === 'error') {
    statusClasses = css.error;
  } else if (status === 'pending') {
    statusClasses = css.pending;
  }

  return (
    <div className={`${css.notification} ${statusClasses}`} onClick={hide}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}
