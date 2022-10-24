# Pre-rendering

- Next.js generates pages statically (SSG, Static Site Generation) by default
- Static data may come from databases, HTTP calls or local files
- Statis data is fetched via the function `getStaticProps()` which injects props into the page
- Pages are pre-generated on the development machine at build time but can periodically be re-generated on the server according to a `revalidate` key
- The `revalidate` key is returned by `getStaticProps()` and indicates the number of seconds the generated page should remain in cache, so that visitors within that time span receive the cached version
- The server sends pre-rendered pages to the browser, but then the page is "re-hydrated" with JavaScript and can become a normal SPA

- Running `npm run start` on a default Next.js app starts a previously built app with `npm run build`
