import { ReactNode } from 'react';
import css from './event-content.module.css';

interface EventContentProps {
  children: ReactNode;
}

export function EventContent({ children }: EventContentProps) {
  return (
    <section className={css.content}>
      {children}
    </section>
  );
}
