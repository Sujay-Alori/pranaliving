import { useEffect, useState } from 'react';
import { useReveal } from '../../hooks/useReveal';
import { energies, projects } from '../../data/residences';

export default function EnergyPage({ energyId, onNavigate }) {
  const [loaded, setLoaded] = useState(false);

  const energyIndex = energies.findIndex((e) => e.id === energyId);
  const energy = energies[energyIndex];
  const prevEnergy = energyIndex > 0 ? energies[energyIndex - 1] : null;
  const nextEnergy = energyIndex < energies.length - 1 ? energies[energyIndex + 1] : null;

  const heroRef = useReveal();
  const introRef = useReveal();
  const statementRef = useReveal();
  const principleRefs = [useReveal(), useReveal()];
  const galleryRef = useReveal();
  const relatedRef = useReveal();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, [energyId]);

  if (!energy) {
    return (
      <section className="energy-page">
        <div className="energy-page__inner">
          <p className="energy-page__empty">Energy not found.</p>
          <button className="energy-page__back" onClick={() => onNavigate('home')}>
            &larr; Back to Home
          </button>
        </div>
      </section>
    );
  }

  const related = energy.related
    .map((id) => projects.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <section className={`energy-page energy-page--${energy.id}`}>
      {/* Hero */}
      <div className={`energy-hero${loaded ? ' energy-hero--loaded' : ''}`}>
        <div className="energy-hero__media">
          <img
            src={energy.heroImage}
            alt={energy.heroAlt}
            className="energy-hero__image"
            fetchPriority="high"
            decoding="async"
          />
          <div className="energy-hero__overlay" />
        </div>
        <div className="energy-hero__content">
          <span className="energy-hero__number">{energy.number}</span>
          <h1 className="energy-hero__title">{energy.name}</h1>
          <p className="energy-hero__meaning">{energy.meaning}</p>
        </div>
      </div>

      <div className="energy-page__inner">
        {/* Introduction */}
        <div className="energy-intro reveal" ref={heroRef}>
          <span className="energy-intro__label">({energy.name})</span>
          <p className="energy-intro__text">{energy.intro}</p>
          <div className="energy-intro__meta">
            <span>{energy.label}</span>
          </div>
        </div>

        {/* Statement */}
        <div className="energy-statement reveal" ref={introRef}>
          <p className="energy-statement__text">{energy.statement}</p>
        </div>

        {/* Principles — alternating image + text */}
        <div className="energy-principles">
          {energy.principles.map((principle, i) => (
            <div
              className={`energy-principle${i % 2 === 1 ? ' energy-principle--reverse' : ''}`}
              key={principle.label}
              ref={principleRefs[i]}
            >
              <div className="energy-principle__media">
                <img
                  src={energy.principleImages[i]}
                  alt={`${energy.name} ${principle.title.toLowerCase()}`}
                  className="energy-principle__image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="energy-principle__content">
                <span className="energy-principle__label">({principle.label})</span>
                <h2 className="energy-principle__title">{principle.title}</h2>
                <p className="energy-principle__text">{principle.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Full-width image */}
        <div className="energy-full">
          <img
            src={energy.gallery[0]}
            alt={`${energy.name} full view`}
            className="energy-full__img"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Gallery */}
        <div className="energy-gallery reveal" ref={galleryRef}>
          {energy.gallery.map((img, i) => (
            <div className="energy-gallery__item" key={i}>
              <img
                src={img}
                alt={`${energy.name} detail ${i + 1}`}
                className="energy-gallery__img"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>

        {/* Related projects */}
        {related.length > 0 && (
          <div className="energy-related reveal" ref={relatedRef}>
            <span className="energy-related__label">(RELATED PROJECT)</span>
            <div className="energy-related__grid">
              {related.map((project) => (
                <button
                  key={project.id}
                  className="energy-related__card"
                  onClick={() => onNavigate('project', project.id)}
                >
                  <div className="energy-related__image-wrap">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="energy-related__image"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="energy-related__info">
                    <h3 className="energy-related__name">{project.name}</h3>
                    <div className="energy-related__meta">
                      <span>{project.location}</span>
                      <span>&mdash;</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Previous / Next energy */}
        <div className="energy-nav">
          {prevEnergy ? (
            <button
              className="energy-nav__btn energy-nav__btn--prev"
              onClick={() => onNavigate('energy', prevEnergy.id)}
            >
              <span className="energy-nav__label">PREVIOUS</span>
              <span className="energy-nav__name">{prevEnergy.name}</span>
              <span className="energy-nav__meaning">{prevEnergy.meaning}</span>
            </button>
          ) : <div />}
          {nextEnergy ? (
            <button
              className="energy-nav__btn energy-nav__btn--next"
              onClick={() => onNavigate('energy', nextEnergy.id)}
            >
              <span className="energy-nav__label">NEXT</span>
              <span className="energy-nav__name">{nextEnergy.name}</span>
              <span className="energy-nav__meaning">{nextEnergy.meaning}</span>
            </button>
          ) : <div />}
        </div>
      </div>
    </section>
  );
}
