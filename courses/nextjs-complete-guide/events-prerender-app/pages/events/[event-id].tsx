import { useRouter } from 'next/router';

import { EventContent } from '../../components/events/event-content/event-content';
import EventLogistics from '../../components/events/event-logistics/event-logistics';
import { EventSummary } from '../../components/events/event-summary/event-summary';
import { getEventById } from '../../mock-data';

export default function EventDetailPage() {

  const router = useRouter();
  const eventId = router.query['event-id'];
  const event = getEventById(eventId as string);

  if (!event) {
    return (
      <p>No event found with id <strong>{eventId}</strong></p>
    );
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}
