import Link from 'next/link';
import { useRouter } from 'next/router';

import { EventList } from '../../components/events/event-list/event-list';
import * as api from '../../api';
import { EventFilters, LiveEvent } from '../../types';

function isInputValid(input: any): boolean {
  if (!input) return false;
  if (input?.length !== 2) return false;

  const year = +input[0];
  if (isNaN(year) || year < 2000 || year > 3000) return false;

  const month = +input[1];
  if (isNaN(month) || month <= 1 || month >= 12) return false;

  return true;
}

function parseInput(input: any): EventFilters {
  const [year, month] = input.map((val: any) => +val);
  return { year, month };
}

export default function FilteredEventsPage() {

  const router = useRouter();

  if (!isInputValid(router.query['slug'])) {
    return (
      <div className="content-container">
        <h1>Error</h1>
        <p>No valid filters</p>
      </div>
    );
  }

  const filters = parseInput(router.query['slug']);
  const events: LiveEvent[] = [];
  // const events = getFilteredEvents(filters);

  let result: JSX.Element;

  if (events.length) {
    result = <EventList events={events} />;
  } else {
    result = <p>No events, go back to <Link href="/events">all events</Link></p>;
  }

  return (
    <div className="content-container">
      <h1>Events happening on {filters.year}/{filters.month}</h1>
      {result}
    </div>
  );
}

// export async function getStaticProps(context: GetStaticPropsContext) {
//   const id = context.params!['event-id'];
//   if (!id) return { notFound: true };
//   const event: LiveEvent | null = await api.getEventById(+id);
//   if (!event) return { notFound: true };
//   const props = { event } as EventDetailPageProps;
//   return { props };
// }

// export async function getStaticPaths() {
//   const events = await api.getAllEvents();
//   const paths = events.map(ev => ({ params: { 'event-id': ev.id }}));
//   const fallback = 'blocking';
//   return { fallback, paths };
// }
