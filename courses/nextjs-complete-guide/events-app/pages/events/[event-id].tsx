import { useRouter } from 'next/router';
import { getEventById } from '../../mock-data';

export default function EventDetailPage() {

  const router = useRouter();
  const eventId = router.query['event-id'];
  const event = getEventById(eventId as string);

  // TODO: Redirect?
  if (!event) {
    return (
      <p>No event found with id <strong>{eventId}</strong></p>
    );
  }

  console.log(event);

  return (
    <>
      <h1>Event detail page</h1>
      <p>Showing details of event <strong>{eventId}</strong></p>
    </>
  );
}
