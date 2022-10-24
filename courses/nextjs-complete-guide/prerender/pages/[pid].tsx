import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { loadDataFromFileSystem } from '../utils';

export const getStaticProps: GetStaticProps = async context => {
  const { params } = context;
  const productId = params?.pid;
  const products = await loadDataFromFileSystem();
  const product = products.find(p => p.id === productId);
  const props = { product };

  return { props };
};

export default function ProductPage({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) {

  console.log('product', product); // TODO: Remove
  const { title, description } = product;

  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  );
}
