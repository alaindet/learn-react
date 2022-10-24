import { getFeaturedEvents } from '../mock-data';
import { EventList } from '../components/events/event-list/event-list';

export default function HomePage() {

  const events = getFeaturedEvents();

  return (
    <div className="content-container">
      <h1>Featured events</h1>
      <EventList events={events} />
    </div>
  );
}
