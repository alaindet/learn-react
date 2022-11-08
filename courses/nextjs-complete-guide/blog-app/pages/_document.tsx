import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>

          {/* Portal targets */}
          <div id="notifications"></div>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
