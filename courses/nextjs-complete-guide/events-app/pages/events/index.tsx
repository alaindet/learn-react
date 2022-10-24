import { EventList } from '../../components/events/event-list/event-list';
import { EventsSearch } from '../../components/events/events-search/events-search';
import { getAllEvents } from '../../mock-data';

export default function EventsPage() {

  const events = getAllEvents();

  return (
    <div className="content-container">
      <h1>Events</h1>
      <EventsSearch />
      <EventList events={events} />
    </div>
  );
}
