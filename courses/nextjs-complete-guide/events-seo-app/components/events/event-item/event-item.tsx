import Image from 'next/image';

import { LiveEvent } from '../../../types';
import { LinkButton } from '../../ui/button/link-button';
import { DateIcon } from '../../icons/date-icon';
import { AddressIcon } from '../../icons/address-icon';
import { ArrowRightIcon } from '../../icons/arrow-right-icon';
import css from './event-item.module.css';

interface EventItemProps {
  event: LiveEvent;
}

export function EventItem({ event }: EventItemProps) {

  const readableDate = new Date(event.date).toLocaleString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const readableLocation = event.location.replace(', ', '\n');

  return (
    <li className={css.item}>
      <Image
        className={css.image}
        src={`/${event.image}`}
        alt={event.title}
        width={250}
        height={160}
      />
      <div className={css.content}>
        <h2>{event.title}</h2>
        <time className={css.date}>
          <span className={css.icon}>
            <DateIcon />
          </span>
          {readableDate}
        </time>
        <address className={css.location}>
          <span className={css.icon}>
            <AddressIcon />
          </span>
          {readableLocation}
        </address>

        <div className={css.actions}>
          <LinkButton href={`/events/${event.id}`}>
            Know more
            <span className={css.icon}>
              <ArrowRightIcon />
            </span>
          </LinkButton>
        </div>

      </div>
    </li>
  );
}
