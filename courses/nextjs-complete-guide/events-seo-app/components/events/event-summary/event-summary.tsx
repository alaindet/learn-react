import css from './event-summary.module.css';

interface EventSummaryProps {
  title: string;
}

export function EventSummary({ title }: EventSummaryProps) {
  return (
    <section className={css.summary}>
      <h1>{title}</h1>
    </section>
  );
}
