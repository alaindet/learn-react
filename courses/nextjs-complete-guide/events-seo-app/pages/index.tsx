import { InferGetStaticPropsType } from 'next';
import * as api from '../api';
import { EventList } from '../components/events/event-list/event-list';
import { LiveEvent } from '../types';

export default function HomePage({
  events,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="content-container">
      <h1>Featured events</h1>
      <EventList events={events} />
    </div>
  );
}

export async function getStaticProps() {
  const ONE_HOUR = 60 * 60;
  const events: LiveEvent[] = await api.getFeaturedEvents();
  const props = { events };
  return { props, revalidate: ONE_HOUR };
}
