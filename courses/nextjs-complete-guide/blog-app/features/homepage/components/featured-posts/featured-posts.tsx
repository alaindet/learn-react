import { PostsGrid } from '@/common/components/posts';
import { BlogPost } from '@/common/types';
import css from './featured-posts.module.css';

interface FeaturedPostsProps {
  posts: BlogPost[];
}

export function FeaturedPosts({ posts }: FeaturedPostsProps) {
  return (
    <section className={css['featured-posts']}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
