import { useRouter } from 'next/router';

export default function EventDetailPage() {

  const router = useRouter();
  const eventId = router.query['event-id'];

  return (
    <>
      <h1>Event detail page</h1>
      <p>Showing details of event <strong>{eventId}</strong></p>
    </>
  );
}
