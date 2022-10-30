import { GetStaticPropsContext } from 'next';
import Head from 'next/head';

import { EventContent } from '../../components/events/event-content/event-content';
import EventLogistics from '../../components/events/event-logistics/event-logistics';
import { EventSummary } from '../../components/events/event-summary/event-summary';
import * as api from '../../api';
import { LiveEvent } from '../../types';

interface EventDetailPageProps {
  event: LiveEvent;
}

export default function EventDetailPage({
  event,
}: EventDetailPageProps) {

  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const id = context.params!['event-id'];
  if (!id) return { notFound: true };
  const event: LiveEvent | null = await api.getEventById(id as string);
  if (!event) return { notFound: true };
  const props = { event } as EventDetailPageProps;
  const ONE_MINUTE = 60;
  return { props, revalidate: ONE_MINUTE };
}

export async function getStaticPaths() {
  const featuredEvents = await api.getFeaturedEvents();
  const paths = featuredEvents.map(ev => ({ params: { 'event-id': ev.id }}));
  return { paths, fallback: 'blocking' };
}
