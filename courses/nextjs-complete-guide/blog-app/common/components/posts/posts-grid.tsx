import { BlogPost } from '@/common/types';
import { PostItem } from './post-item';
import css from './posts-grid.module.css';

interface PostsGridProps {
  posts: BlogPost[];
}

export function PostsGrid({ posts }: PostsGridProps) {
  return (
    <ul className={css.posts}>
      {posts.map(post => (
        <li key={post.slug}>
          <PostItem post={post} />
        </li>
      ))}
    </ul>
  );
}
