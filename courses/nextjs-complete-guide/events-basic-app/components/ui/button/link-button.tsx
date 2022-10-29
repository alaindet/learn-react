import { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';

import css from './button.module.css';

interface LinkButtonProps {
  href: LinkProps['href'];
  children: ReactNode;
}

export function LinkButton({ href, children }: LinkButtonProps) {
  return (
    <Link href={href}>
      <a className={css.button}>{children}</a>
    </Link>
  );
}
