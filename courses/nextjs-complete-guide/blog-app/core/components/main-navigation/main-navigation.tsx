import Link from 'next/link';

import { TheLogo } from '../logo/logo';
import css from './main-navigation.module.css';

export function TheMainNavigation() {
  return (
    <header className={css.header}>
      <div className={`${css['header-content']} content-container`}>

        <Link href="/">
          <TheLogo />
        </Link>

        <nav>
          <ul>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}
