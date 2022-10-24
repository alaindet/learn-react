import { LiveEvent } from '../../types';
import { EventItem } from './event-item';
import styles from './event-list.module.css';

interface EventListProps {
  events: LiveEvent[];
}

export function EventList({ events }: EventListProps) {
  return (
    <ul className={styles.eventList}>
      {events.map(event => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
}
