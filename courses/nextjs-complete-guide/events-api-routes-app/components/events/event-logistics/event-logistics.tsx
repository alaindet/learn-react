import Image from 'next/image';

import { AddressIcon } from '@/components/icons/address-icon';
import { DateIcon } from '@/components/icons/date-icon';
import { EventLogisticsItem } from '../event-logistics-item/event-logistics-item';
import css from './event-logistics.module.css';

const DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
};

interface EventLogisticsProps {
  date: string;
  address: string;
  image: string;
  imageAlt: string;
}

function EventLogistics({
  date,
  address,
  image,
  imageAlt,
}: EventLogisticsProps) {

  const readableDate = new Date(date).toLocaleDateString('en-US', DATE_FORMAT_OPTIONS);

  const readableLocation = address.replace(', ', '\n');

  return (
    <section className={css.logistics}>

      <div className={css.image}>
        <Image
          src={`/${image}`}
          alt={imageAlt}
          width={400}
          height={400}
        />
      </div>

      <ul className={css.list}>
        <EventLogisticsItem icon={DateIcon}>
          <time>{readableDate}</time>
        </EventLogisticsItem>
        <EventLogisticsItem icon={AddressIcon}>
          <address>{readableLocation}</address>
        </EventLogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
