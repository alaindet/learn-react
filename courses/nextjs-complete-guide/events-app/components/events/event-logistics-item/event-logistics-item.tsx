import { ReactNode } from 'react';

import css from './event-logistics-item.module.css';

interface EventLogisticsItemProps {
  children: ReactNode;
  icon: React.FunctionComponent;
}

export function EventLogisticsItem({
  icon: Icon,
  children,
}: EventLogisticsItemProps) {
  return (
    <li className={css.item}>
      <span className={css.icon}>
        <Icon />
      </span>
      <span className={css.content}>
        {children}
      </span>
    </li>
  );
}
