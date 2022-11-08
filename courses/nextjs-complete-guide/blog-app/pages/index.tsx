import Head from 'next/head';

import { BlogPost, FullBlogPost } from '@/common/types';
import { FeaturedPosts, HeroBanner } from '@/features/homepage/components';
import { getFeaturedPosts } from '@/common/utils';

interface HomePageProps {
  featuredPosts: BlogPost[];
}

export default function HomePage({ featuredPosts }: HomePageProps) {
  return (
    <>
      <Head>
        <title>John's Blog</title>
        <meta name="description" content="I post about stuff I like" />
      </Head>
      <h1>Home page</h1>
      <HeroBanner />
      <FeaturedPosts posts={featuredPosts} />
    </>
  )
}

export async function getStaticProps() {
  const ONE_HOUR = 60 * 60;
  const featuredPosts: FullBlogPost[] = getFeaturedPosts();
  const props = { featuredPosts };
  return { props, revalidate: ONE_HOUR };
}
