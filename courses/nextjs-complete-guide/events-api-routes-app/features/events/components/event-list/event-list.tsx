import { LiveEvent } from '../../types';
import { EventItem } from '../event-item/event-item';
import css from './event-list.module.css';

interface EventListProps {
  events: LiveEvent[];
}

export function EventList({ events }: EventListProps) {
  return (
    <ul className={css.list}>
      {events.map(event => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
}
