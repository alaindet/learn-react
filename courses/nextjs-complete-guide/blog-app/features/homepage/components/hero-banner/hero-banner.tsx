import Image from 'next/image';

import css from './hero-banner.module.css';

export function HeroBanner() {
  return (
    <section className={`${css['hero-banner']} content-container-breaker`}>
      <div className={css.image}>
        <Image
          src="/images/website/john-doe.jpg"
          alt="Portrait picture of John Doe"
          width={90}
          height={90}
        />
      </div>
      <h1>John Doe</h1>
      <p>
        I blog about web development and the surroundings. Unexpected random topics may also appear, like shiny Pokémons.
      </p>
    </section>
  );
}
