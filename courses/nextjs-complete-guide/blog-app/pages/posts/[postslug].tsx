import { GetStaticPropsContext } from 'next';

import { PostContent } from '@/common/components/posts';
import { getFeaturedPosts, getPost } from '@/common/utils';
import { FullBlogPost } from '@/common/types';

interface PostPageProps {
  post: FullBlogPost;
}

export default function PostPage({ post }: PostPageProps) {
  return <PostContent post={post} />;
}

export function getStaticProps(context: GetStaticPropsContext) {
  const slug = context.params!['postslug'];
  if (!slug || Array.isArray(slug)) return { notFound: true };
  const post: FullBlogPost | null = getPost(slug);
  if (!post) return { notFound: true };
  const props = { post } as PostPageProps;
  const ONE_HOUR = 60 * 60;
  return { props, revalidate: ONE_HOUR };
}

export function getStaticPaths() {
  const featuredPosts = getFeaturedPosts();
  const paths = featuredPosts.map(post => ({ params: { 'postslug': post.slug } }));
  return { paths, fallback: 'blocking' };
}
