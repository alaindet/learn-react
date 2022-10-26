import { useEffect, useState } from 'react';

/**
 * This is an example of a client-side rendered page, with dynamic data fetching
 */
export default function LastSalesPage() {

  const [sales, setSales] = useState<any[]>([]);

  useEffect(() => {
    const getData = async () => {
      const salesData = await fetch('http://localhost:4242/sales')
        .then(res => res.json());
      setSales(salesData);
    };

    getData();
  }, []);

  return (
    <ul>
      {sales.map(sale => (
        <li key={sale.id}>{sale.username}</li>
      ))}
    </ul>
  );
}
