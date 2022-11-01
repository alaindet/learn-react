import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import * as api from '../api';
import { EventList } from '../components/events/event-list/event-list';
import { LiveEvent } from '../types';

export default function HomePage({
  events,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Next Events - Featured events</title>
        <meta name="description" content="Find events that matter to you" />
      </Head>
      <div className="content-container">
        <h1>Featured events</h1>
        <EventList events={events} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const ONE_HOUR = 60 * 60;
  const events: LiveEvent[] = await api.getFeaturedEvents();
  const props = { events };
  return { props, revalidate: ONE_HOUR };
}
