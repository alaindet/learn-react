import { useEffect, useState } from 'react';
import useSWR from 'swr';

interface Sale {
  id: number;
  date: string; // 2022-10-26T06:49:39.342Z
  username: string;
  volume: number;
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

/**
 * This is an example of a client-side rendered page, with dynamic data fetching
 */
export default function LastSalesPage() {

  const [sales, setSales] = useState<any[]>([]);

  const url = 'http://localhost:4242/sales';
  const { data, error } = useSWR(url, fetcher);

  useEffect(() => {
    if (data) {
      setSales(data as Sale[]);
    }
  }, [data]);

  if (error) {
    return <p>Failed to load data</p>
  }

  if (!data || !sales.length) {
    return <p>Loading...</p>
  }

  return (
    <>
      <h1>Last sales</h1>
      <ul>
        {sales.map(sale => (
          <li key={sale.id}>
            {sale.username}, €{sale.volume}
          </li>
        ))}
      </ul>
    </>
  );
}
