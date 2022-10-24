import Link from 'next/link';

import { LiveEvent } from '../../types';
import styles from './event-item.module.css';

interface EventItemProps {
  event: LiveEvent;
}

export function EventItem({ event }: EventItemProps) {

  const readableDate = new Date(event.date).toLocaleString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const readableLocation = event.location.replace(', ', '\n');

  return (
    <li className={styles.eventItem}>
      <img
        className={styles.eventItemImage}
        src={'/' + event.image}
        alt={event.title}
      />
      <div className={styles.eventItemInfo}>
        <h2>{event.title}</h2>
        <time>{readableDate}</time>
        <address>{readableLocation}</address>
        <Link className={styles.eventItemLink} href={`/events/${event.id}`}>
          Know more
        </Link>
      </div>
    </li>
  );
}
