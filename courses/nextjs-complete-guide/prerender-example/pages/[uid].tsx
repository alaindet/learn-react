import { InferGetServerSidePropsType } from 'next';

/**
 * This is an example of a server-side rendered page
 */
export default function UserPage({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {

  return (
    <>
      <h1>User profile page</h1>
      <p>User: {user.name}</p>
    </>
  );
}

export async function getServerSideProps() {

  const user = {
    name: 'Alice',
  };

  return {
    props: { user },
  };
};
