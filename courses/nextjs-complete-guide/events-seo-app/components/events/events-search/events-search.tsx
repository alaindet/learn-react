import { FormEvent, useRef } from 'react';

import { Button } from '../../ui/button/button';
import { EventFilters } from '../../../types';
import { YEARS, MONTHS } from './options';
import css from './events-search.module.css';

interface EventsSearchProps {
  onSearch: (filters: EventFilters) => void;
}

export function EventsSearch({ onSearch }: EventsSearchProps) {

  const yearRef = useRef<null | HTMLSelectElement>(null);
  const monthRef = useRef<null | HTMLSelectElement>(null);

  function handleSearchFilters(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const year = yearRef.current?.value;
    const month = monthRef.current?.value;

    // TODO: Validation
    if (!year || !month) return;

    const filters: EventFilters = {
      year: +year,
      month: +month,
    };

    onSearch(filters);
  }

  return (
    <form onSubmit={handleSearchFilters} className={css.filters}>

      {/* Year */}
      <div className={css.item}>
        <label htmlFor="year">Year</label>
        <select className={css.control} id="year" ref={yearRef}>
          {YEARS.map(year => (
            <option value={year.value} key={year.value}>
              {year.label}
            </option>
          ))}
        </select>
      </div>

      {/* Month */}
      <div className={css.item}>
        <label htmlFor="month">Month</label>
        <select className={css.control} id="month" ref={monthRef}>
          {MONTHS.map(month => (
            <option value={month.value} key={month.value}>
              {month.label}
            </option>
          ))}
        </select>
      </div>

      {/* Search */}
      <div className={css.item}>
        <Button type="submit">Search</Button>
      </div>

    </form>
  );
}
