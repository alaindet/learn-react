import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import { LiveEvent, EventList } from '@/features/events';
import { getFeaturedEvents } from '@/features/events/server';
import { NewsletterRegistration } from '@/common/components/input';

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
        <NewsletterRegistration  />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const ONE_HOUR = 60 * 60;
  const events: LiveEvent[] = await getFeaturedEvents();
  const props = { events };
  return { props, revalidate: ONE_HOUR };
}
