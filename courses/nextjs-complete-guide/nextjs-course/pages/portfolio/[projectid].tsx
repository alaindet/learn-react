import { useRouter } from 'next/router';

export default function PortfolioProjectPage() {

  const router = useRouter();
  const { projectid } = router.query;

  return (
    <div>
      <h1>The Portfolio project page</h1>
      <h2>{projectid}</h2>
    </div>
  );
}
