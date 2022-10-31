import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import Head from 'next/head';

import { LiveEvent, LiveEventFilters, getFilteredEvents } from '@/features/events';
import { EventList } from '@/components/events/event-list/event-list';

interface FilteredEventsPageProps {
  validInput: boolean;
  filters: LiveEventFilters | null;
  results: LiveEvent[];
}

export default function FilteredEventsPage({
  validInput,
  filters,
  results,
}: FilteredEventsPageProps) {

  if (!validInput) {
    return (
      <>
        <Head>
          <title>Next Events - Filtered events</title>
          <meta name="description" content="Invalid search" />
        </Head>
        <div className="content-container">
          <h1>Error</h1>
          <p>No valid filters provided</p>
        </div>
      </>
    );
  }

  const resultsView = !results.length
    ? <p>No events found, go back to <Link href="/events">all events</Link></p>
    : <EventList events={results} />; 

  return (
    <>
      <Head>
        <title>NexEvents - Filtered events</title>
        <meta
          name="description"
          content={`Events happening on ${filters?.year}/${filters?.month}`}
        />
      </Head>
      <div className="content-container">
        <h1>Events happening on {filters?.year}/{filters?.month}</h1>
        {resultsView}
      </div>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {

  if (!isInputValid(context.query['slug'])) {
    const validInput = false;
    const filters = null;
    const results: LiveEvent[] = [];
    const props = { validInput, filters, results } as FilteredEventsPageProps;
    return { props };
  }

  const validInput = true;
  const filters = parseInput(context.query['slug']);
  const results = await getFilteredEvents(filters);
  const props = { validInput, filters, results } as FilteredEventsPageProps;
  return { props };
}

function isInputValid(input: any): boolean {
  if (!input) return false;
  if (input?.length !== 2) return false;
  
  const year = +input[0];
  if (isNaN(year) || year < 2000 || year > 3000) return false;

  const month = +input[1];
  if (isNaN(month) || month <= 1 || month >= 12) return false;

  return true;
}

function parseInput(input: any): LiveEventFilters {
  const [year, month] = input.map((val: any) => +val);
  return { year, month };
}
