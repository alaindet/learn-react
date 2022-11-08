import { ReactNode } from 'react';

import { TheMainNavigation } from '../main-navigation/main-navigation';
import css from './layout.module.css';

export function TheLayout({ children }: { children: ReactNode}) {
  return (
    <>
      <TheMainNavigation />
      <main className="content-container">{children}</main>
    </>
  );
}
