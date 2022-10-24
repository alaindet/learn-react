import fs from 'fs/promises';
import path from 'path';

// NOTE: Current working directory is the root path when executing Next.js
// Not the /pages directory
async function loadDataFromFileSystem(): Promise<HomePageProps> {
  const root = process.cwd();
  const filePath = path.join(root, 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath, { encoding: 'utf-8' });
  return JSON.parse(jsonData);
}

// getStaticProps() gets called first, if present
// This is only executed on the server side
// Any imported file used exclusively here is removed from the frontend bundle
// (ex.: 'fs/promises' and 'path' native modules)
export async function getStaticProps(): Promise<{ props: HomePageProps }> {
  const props = await loadDataFromFileSystem();
  return { props };
}

interface Product {
  id: string;
  title: string;
}

interface HomePageProps {
  products: Product[];
}

export default function HomePage({ products }: HomePageProps) {
  return (
    <div>
      <ul>
        {products.map(p => <li key={p.id}>{p.title}</li>)}
      </ul>
    </div>
  )
}
