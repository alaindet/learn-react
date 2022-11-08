import { createPortal } from 'react-dom';

import css from './notification.module.css';

interface NotificationProps {
  title: string;
  message: string;
  status: 'success' | 'error' | 'pending';
  onDismiss: () => void;
}

export function Notification({
  title,
  message,
  status,
  onDismiss,
}: NotificationProps) {

  let statusCss = {
    success: css.success,
    error: css.error,
    pending: css.pending,
  }[status];

  if (!statusCss) {
    statusCss = css.error;
  }

  // TODO
  return createPortal(
    (
      <div className={`${css.notification} ${statusCss}`} onClick={onDismiss}>
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
    ),
    document.getElementById('notifications')!,
  );
}
