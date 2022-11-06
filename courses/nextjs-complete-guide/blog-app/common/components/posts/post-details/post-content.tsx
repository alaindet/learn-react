import ReactMarkdown from 'react-markdown';

import { FullBlogPost } from '@/common/types';
import { PostHeader } from './post-header';
import css from './post-content.module.css';

interface PostContentProps {
  post: FullBlogPost;
}

export function PostContent({ post }: PostContentProps) {

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={css.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}
