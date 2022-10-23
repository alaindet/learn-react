import { useRouter } from 'next/router';

// /blog/2022                  => query = { slug: ['2022'] }
// /blog/2022/12               => query = { slug: ['2022', '12'] }
// /blog/the-name-of-the-post  => query = { slug: ['the-name-of-the-post'] }
// /blog/author-name/post-name => query = { slug: ['author-name', 'post-name'] }
export default function BlogPostPage() {
  const router = useRouter();

  console.log('Blog post page query', router.query);

  return (
    <>
      <h1>Blog post page</h1>
      <p>The blog post page</p>
    </>
  );
}
