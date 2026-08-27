import { useEffect, useState } from 'react';
import { hero } from '../../data/residences';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`hero${loaded ? ' hero--loaded' : ''}`} id="hero" aria-label="Hero">
      <div className="hero__media">
        <img
          src={hero.image}
          alt={hero.alt}
          className="hero__image"
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero__overlay" />
      </div>
      <div className="hero__content">
        <h1 className="hero__title">
          <span className="hero__title-main">PRANA</span>
          <span className="hero__title-sub">Residences</span>
        </h1>
        <p className="hero__tagline">HOMES THAT BREATHE WITH NATURE</p>
        <a href="#concept" className="hero__cta">
          EXPLORE THE RESIDENCES
        </a>
      </div>
    </section>
  );
}
