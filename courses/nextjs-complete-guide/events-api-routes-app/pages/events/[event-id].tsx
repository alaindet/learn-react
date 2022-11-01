import { GetStaticPropsContext } from 'next';
import Head from 'next/head';

import { LiveEvent, EventContent, EventLogistics, EventSummary } from '@/features/events';
import { getFeaturedEvents, getEventById } from '@/features/events/server';
import { Comments } from '@/common/components/input';

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
      <Comments eventId={event.id} />
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const id = context.params!['event-id'];
  if (!id) return { notFound: true };
  const event: LiveEvent | null = await getEventById(id as string);
  if (!event) return { notFound: true };
  const props = { event } as EventDetailPageProps;
  const ONE_MINUTE = 60;
  return { props, revalidate: ONE_MINUTE };
}

export async function getStaticPaths() {
  const featuredEvents = await getFeaturedEvents();
  const paths = featuredEvents.map(ev => ({ params: { 'event-id': ev.id }}));
  return { paths, fallback: 'blocking' };
}
