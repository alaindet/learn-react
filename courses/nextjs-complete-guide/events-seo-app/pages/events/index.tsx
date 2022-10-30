import { useRouter } from 'next/router';
import Head from 'next/head';

import { EventList } from '../../components/events/event-list/event-list';
import { EventsSearch } from '../../components/events/events-search/events-search';
import { EventFilters, LiveEvent } from '../../types';
import * as api from '../../api';

interface EventsPageProps {
  events: LiveEvent[];
}

export default function EventsPage({ events }: EventsPageProps) {

  const router = useRouter();

  function handleSearchFilters(filters: EventFilters) {
    const { year, month } = filters;
    router.push(`/events/${year}/${month}`);
  }

  return (
    <>
      <Head>
        <title>Next Events - All Events</title>
        <meta name="description" content="Here is a list of all events" />
      </Head>
      <div className="content-container">
        <h1>Events</h1>
        <EventsSearch onSearch={handleSearchFilters} />
        <EventList events={events} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const ONE_HOUR = 60 * 60;
  const events: LiveEvent[] = await api.getAllEvents();
  const props = { events } as EventsPageProps;
  return { props, revalidate: ONE_HOUR };
}
