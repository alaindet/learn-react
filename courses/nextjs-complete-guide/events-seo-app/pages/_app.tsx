import type { AppProps } from 'next/app';

import { TheLayout } from '../components/layout/layout';
import '../styles/globals.css';

// This is the app shell
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TheLayout>
      <Component {...pageProps} />
    </TheLayout>
  );
}
