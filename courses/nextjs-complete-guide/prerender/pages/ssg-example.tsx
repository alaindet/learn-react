import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { loadDataFromFileSystem } from '../utils';

// getStaticProps() gets called first, if present
// This is only executed on your machine when running "npm run build"
// Any imported file used exclusively here is removed from the frontend bundle
// (ex.: 'fs/promises' and 'path' native modules)
// "revalidate" key caches SSG version for given seconds, then regenerates and
// caches the page again upon next request
export const getStaticProps: GetStaticProps = async context => {

  // Return the 404 page
  // if (true) {
  //   return { notFound: true };
  // }

  // Redirect somewhere
  // if (true) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //     },
  //   };
  // }

  const products = await loadDataFromFileSystem();
  const props = { products };

  const ONE_HOUR = 60 * 60;
  const revalidate = ONE_HOUR;

  return { props, revalidate };
}

export default function SsgExamplePage({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <ul>
        {products.map(p => <li key={p.id}>{p.title}</li>)}
      </ul>
    </div>
  )
}
