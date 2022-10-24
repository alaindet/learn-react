import { getFeaturedEvents } from '../mock-data';
import { EventList } from '../components/events/event-list';

export default function HomePage() {

  const events = getFeaturedEvents();

  return (
    <>
      <EventList events={events} />
    </>
  );
}
