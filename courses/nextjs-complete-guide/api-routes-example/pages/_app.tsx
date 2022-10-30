import type { AppProps } from 'next/app';

import '../styles/globals.css';
import css from '../styles/app.module.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={css.app}>
      <Component {...pageProps} />
    </main>
  );
}
