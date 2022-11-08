import Image from 'next/image';

import css from './hero-banner.module.css';

export function HeroBanner() {
  return (
    <section className="content-container-breaker">
      <div className={`${css['hero-banner']}`}>
        <div className={css.image}>
          <Image
            src="/images/website/john-doe.jpg"
            alt="Portrait picture of John Doe"
            width={200}
            height={200}
          />
        </div>
        <h1>John Doe</h1>
        <p>
          I blog about web development and the surroundings. Unexpected random topics may also appear, like shiny Pokémons.
        </p>
      </div>
    </section>
  );
}
