import Link from 'next/link';

import css from './main-navigation.module.css';

export function MainNavigation() {
  return (
    <nav className={css.nav}>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/issues">Issues</Link></li>
      </ul>
    </nav>
  );
}
