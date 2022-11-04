import { BlogPost } from '@/common/types';
import { FeaturedPosts, HeroBanner } from '@/features/homepage/components';

interface HomePageProps {
  featuredPosts: BlogPost[];
}

export default function HomePage({ featuredPosts }: HomePageProps) {
  return (
    <div>
      <h1>Home page</h1>
      <HeroBanner />
      <FeaturedPosts posts={featuredPosts} />
    </div>
  )
}

export async function getStaticProps() {
  const ONE_HOUR = 60 * 60;
  // TODO
  const featuredPosts: BlogPost[] = [
    {
      title: 'My first post',
      image: 'first.jpg',
      excerpt: 'My first post - Lorem ipsum',
      date: Date.now(),
      slug: 'my-first-post',
    },
    {
      title: 'My second post',
      image: 'second.jpg',
      excerpt: 'My second post - Lorem ipsum',
      date: Date.now(),
      slug: 'my-second-post',
    },
    {
      title: 'My third post',
      image: 'third.jpg',
      excerpt: 'My third post - Lorem ipsum',
      date: Date.now(),
      slug: 'my-third-post',
    },
    {
      title: 'My fourth post',
      image: 'fourth.jpg',
      excerpt: 'My fourth post - Lorem ipsum',
      date: Date.now(),
      slug: 'my-fourth-post',
    },
  ];
  const props = { featuredPosts };
  return { props, revalidate: ONE_HOUR };
}
