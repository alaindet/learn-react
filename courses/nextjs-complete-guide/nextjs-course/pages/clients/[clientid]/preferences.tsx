import { useRouter } from 'next/router';

export default function ClientPreferencesPage() {

  const router = useRouter();
  const { clientid } = router.query;

  return (
    <>
      <h1>Client preferences page</h1>
      <h2>Client: {clientid}</h2>
    </>
  );
}
