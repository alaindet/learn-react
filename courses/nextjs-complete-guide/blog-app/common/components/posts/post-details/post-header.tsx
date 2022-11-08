import Image from 'next/legacy/image'; // TODO: Upgrade to 'next/image';

import  css from './post-header.module.css';

interface PostHeaderProps {
  title: string;
  image: string;
}

export function PostHeader({ title, image }: PostHeaderProps) {
  return (
    <header className={css.header}>
      <h1>{title}</h1>
      <Image
        src={image}
        alt={title}
        width={200}
        height={150}
      />
    </header>
  );
}
