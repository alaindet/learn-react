import Link from 'next/link';
import { useRouter } from 'next/router';

import { EventList } from '../../components/events/event-list/event-list';
import { getFilteredEvents } from '../../mock-data';
import { EventFilters } from '../../types';

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
  const events = getFilteredEvents(filters);

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
