import Link from 'next/link';

import css from './header.module.css';

export function TheHeader() {
  return (
    <header className={css.header}>

      <div className={css.logo}>
        <Link href="/">Next Events</Link>
      </div>

      <nav className={css.navigation}>
        <ul>
          <li>
            <Link href="/events">All Events</Link>
          </li>
        </ul>
      </nav>

    </header>
  );
}
