import Image from 'next/legacy/image'; // TODO: Upgrade to 'next/image';
import Link from 'next/link';

import { BlogPost } from '@/common/types';
import css from './post-item.module.css';

interface PostItemProps {
  post: BlogPost;
}

export function PostItem({ post }: PostItemProps) {

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  const link = `/posts/${post.slug}`;

  return (
    <div className={css.post}>
      <Link href={link}>
        <div className={css.image}>
          <Image
            src={imagePath}
            width={300}
            height={200}
            alt={post.title}
            layout="responsive"
          />
        </div>
        <div className={css.content}>
          <h3>{post.title}</h3>
          <time>{formattedDate}</time>
          <p>{post.excerpt}</p>
        </div>
      </Link>
    </div>
  );
}
