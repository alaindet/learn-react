import { useRouter } from 'next/router';

export default function FilteredEventsPage() {

  const router = useRouter();
  const eventFilters = router.query['slug'] as string[];

  const filtersView = !eventFilters
    ? <p>No filters</p>
    : <ul>{eventFilters.map(filter => <li key={filter}>{filter}</li>)}</ul>

  return (
    <>
      <h1>Filtered events page</h1>
      <p>Showing events filtered by</p>
      {filtersView}
    </>
  );
}
