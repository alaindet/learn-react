import { useRouter } from 'next/router';

export default function NotFoundPage() {

  const router = useRouter();

  return (
    <>
      <h1>Page not found!</h1>
      <p>Path: {router.pathname}</p>
    </>
  );
}
