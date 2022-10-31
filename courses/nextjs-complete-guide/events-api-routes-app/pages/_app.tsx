import type { AppProps } from 'next/app';
import Head from 'next/head';

import { TheLayout } from '@/common/components/layout';
import '@/styles/globals.css';

// This is the app shell
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TheLayout>
      <Head>
        <title>Next Events</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </TheLayout>
  );
}
