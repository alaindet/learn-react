import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Pre-rendering examples</h1>
      <ul>
        <li><Link href="/ssg-example">SSG example</Link></li>
        <li><Link href="/p1">Product page (Dynamic params example)</Link></li>
      </ul>
    </div>
  )
}
