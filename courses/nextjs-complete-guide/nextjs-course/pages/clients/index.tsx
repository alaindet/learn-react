import Link from 'next/link';

const CLIENTS: { id: string; name: string; }[] = [
  { id: 'alice', name: 'Alice' },
  { id: 'bob', name: 'Bob' },
];

export default function ClientsPage() {
  return (
    <>
      <h1>Clients page</h1>
      <nav>
        <ul>
          {CLIENTS.map(client => (
            <li key={client.id}>

              <Link href={`/clients/${client.id}`}>
                {client.name}
              </Link>

              {/* Alternative */}
              {/* <Link href={{
                pathname: '/clients/[id]',
                query: { id: client.id },
              }}>
                {client.name}
              </Link> */}

            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
