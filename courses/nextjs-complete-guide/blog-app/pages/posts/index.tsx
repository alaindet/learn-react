import { AllPosts } from '@/common/components/all-posts/all-posts';
import { FullBlogPost } from '@/common/types';
import { getPosts } from '@/common/utils';

interface PostsPageProps {
  posts: FullBlogPost[];
}

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <div>
      <AllPosts posts={posts} />
    </div>
  );
}

export async function getStaticProps() {
  const ONE_HOUR = 60 * 60;
  const posts: FullBlogPost[] = getPosts();
  const props = { posts };
  return { props, revalidate: ONE_HOUR };
}
