import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>The Home Page</h1>

      {/* Navigation */}
      <nav>
        <ul>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href="/clients">Clients</Link></li>
          <li><Link href="/blog">Blog</Link></li>
        </ul>
      </nav>

    </div>
  );
}
