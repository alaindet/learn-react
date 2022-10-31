import { ReactNode } from 'react';

import { TheHeader } from './header/header';

interface TheLayoutProps {
  children: ReactNode;
}

export function TheLayout({ children }: TheLayoutProps) {
  return (
    <>
      <TheHeader />
      <main>{children}</main>
    </>
  );
}
