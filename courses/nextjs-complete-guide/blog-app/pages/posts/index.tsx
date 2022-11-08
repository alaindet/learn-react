import Head from 'next/head';

import { AllPosts } from '@/common/components/all-posts/all-posts';
import { FullBlogPost } from '@/common/types';
import { getPosts } from '@/common/utils';

interface PostsPageProps {
  posts: FullBlogPost[];
}

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <>
      <Head>
        <title>All posts</title>
        <meta name="description" content="A list of all posts in this blog" />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const ONE_HOUR = 60 * 60;
  const posts: FullBlogPost[] = getPosts();
  const props = { posts };
  return { props, revalidate: ONE_HOUR };
}
