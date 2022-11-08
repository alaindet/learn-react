import type { AppProps } from 'next/app';
import Head from 'next/head';

import { TheLayout } from '@/core/components';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TheLayout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </TheLayout>
  );
}

export default MyApp
