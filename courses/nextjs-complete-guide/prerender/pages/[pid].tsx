import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';

import { loadDataFromFileSystem } from '../utils';

export const getStaticProps: GetStaticProps = async context => {
  const { params } = context;
  const productId = params?.pid;
  const products = await loadDataFromFileSystem();
  const product = products.find(p => p.id === productId) ?? null;
  const props = { product };

  return { props };
};

export const getStaticPaths: GetStaticPaths = async () => {

  const products = await loadDataFromFileSystem();
  const paths = products.map(product => ({ params: { pid: product.id } }));

  return {

    // Calculate other pages as SSR, block rendering while fetching data
    fallback: 'blocking',
    // fallback: false, // 404 on other pages not in "paths" for this dynamic route
    // fallback: true, // Render the page as SSR, does not wait for data fetching

    // Only these pages are pre-rendered
    paths,
  };
};

export default function ProductPage({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) {

  const router = useRouter();
  const productId = router.query['pid'];

  if (!product) {
    return (
      <p>No data for product {productId}</p>
    );
  }

  return (
    <>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </>
  );
}
