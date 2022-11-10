import { ReactNode } from 'react';

import { MainNavigation } from '@/components/ui';
import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js 13 demo</title>
        <meta name="description" content="Next.js 13 demo" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <header><MainNavigation /></header>
        <main>{children}</main>
      </body>
    </html>
  );
}
