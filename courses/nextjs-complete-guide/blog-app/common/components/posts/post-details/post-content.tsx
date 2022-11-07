import ReactMarkdown from 'react-markdown';
import Image from 'next/legacy/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import { FullBlogPost } from '@/common/types';
import { PostHeader } from './post-header';
import css from './post-content.module.css';

interface PostContentProps {
  post: FullBlogPost;
}

export function PostContent({ post }: PostContentProps) {

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const markdownComponents = {
    img(img: any) {
      const fullPath = `/images/posts/${post.slug}/${img.src}`;
      return (
        <div className={css.image}>
          <Image
            src={fullPath}
            alt={img.alt}
            width={600}
            height={400}
            layout="responsive"
          />
        </div>
      );
    },

    code(code: any) {
      const { className, children } = code;
      // className is something like language-js => We need the "js" part here
      const language = className.split('-')[1];
      return (
        <SyntaxHighlighter style={atomDark} language={language}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <article className={css.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={markdownComponents}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
}
