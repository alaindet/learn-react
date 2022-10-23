import { useRouter } from 'next/router';

export default function ClientPage() {

  const router = useRouter();
  const { clientid } = router.query;

  // Imperative navigation example
  function handleLoadProjectA() {

    // Add new item in history
    // router.push('/portfolio/projecta');

    // Alternative push
    router.push({
      pathname: '/portfolio/[projectid]',
      query: { projectid: 'projecta' },
    });

    // Replace current item in history (does not redirect?)
    // router.replace('/portfolio/projecta');
  }

  return (
    <>
      <h1>Client page</h1>
      <h2>Client: {clientid}</h2>
      <button type="button" onClick={handleLoadProjectA}>
        Load Project A
      </button>
    </>
  );
}
