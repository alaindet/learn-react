# Server-side rendering

- It requires you to use `getServerSideProps()` instead of `getStaticProps()` on page files
- `getServerSideProps()` works like `getStaticProps()` but it's run whenever a user requests a given page, not once and/or unfrequently like static pages
