import { useState, useEffect } from 'react';
import { useReveal } from '../../hooks/useReveal';
import { homes } from '../../data/residences';
import HomeTile from '../../components/HomeTile/HomeTile';

export default function HomesGridPage({ onNavigate }) {
  const [loaded, setLoaded] = useState(false);
  const headerRef = useReveal();

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <section className={`homes-hero${loaded ? ' homes-hero--loaded' : ''}`} aria-label="Homes hero">
        <div className="homes-hero__content">
          <span className="homes-hero__eyebrow">(SIX HOMES)</span>
          <h1 className="homes-hero__title">
            Six identities.<br /> One living idea.
          </h1>
          <p className="homes-hero__subtitle">
            Each home is inspired by a fundamental energy of nature.
          </p>
        </div>
      </section>

      <section className="homes-grid-page">
        <div className="homes-grid-page__inner">
          <div className="homes-grid-page__header reveal" ref={headerRef}>
            <p className="homes-grid-page__intro">
              Select a home to explore its dedicated space.
            </p>
          </div>

          <div className="homes-grid">
            {homes.map((home) => (
              <HomeTile
                key={home.id}
                home={home}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
