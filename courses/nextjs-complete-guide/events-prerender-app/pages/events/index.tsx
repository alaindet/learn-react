import { useRouter } from 'next/router';
import { EventList } from '../../components/events/event-list/event-list';
import { EventsSearch } from '../../components/events/events-search/events-search';
import { getAllEvents } from '../../mock-data';
import { EventFilters } from '../../types';

export default function EventsPage() {

  const router = useRouter();
  const events = getAllEvents();

  function handleSearchFilters(filters: EventFilters) {
    const { year, month } = filters;
    router.push(`/events/${year}/${month}`);
  }

  return (
    <div className="content-container">
      <h1>Events</h1>
      <EventsSearch onSearch={handleSearchFilters} />
      <EventList events={events} />
    </div>
  );
}
