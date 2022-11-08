import { BlogPost } from '@/common/types';
import { PostsGrid } from '../posts';
import css from './all-posts.module.css';

interface AllPostsProps {
  posts: BlogPost[];
}

export function AllPosts({ posts }: AllPostsProps) {
  return (
    <section className={css.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
}
