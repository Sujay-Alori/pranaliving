import { useState, useEffect } from 'react';
import { useReveal } from '../../hooks/useReveal';
import { floorPlans } from '../../data/residences';
import FloorPlanViewer from '../../components/FloorPlans/FloorPlanViewer';
import heroImg from '../../assets/images/Hero.png';

export default function FloorPlansPage({ onNavigate }) {
  const headerRef = useReveal();
  const gridRef = useReveal();
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const filtered = floorPlans;

  function closeViewer() {
    setSelectedIndex(-1);
  }

  function step(delta) {
    setSelectedIndex((prev) => {
      const next = prev + delta;
      if (next < 0) return filtered.length - 1;
      if (next >= filtered.length) return 0;
      return next;
    });
  }

  return (
    <>
      <section className="fp-hero">
        <div className="fp-hero__media" aria-hidden="true">
          <img src={heroImg} alt="" className="fp-hero__image" decoding="async" />
          <div className="fp-hero__overlay" />
        </div>
        <div className="fp-hero__inner">
          <span className="fp-hero__eyebrow">PRANA Residences</span>
          <h1 className="fp-hero__title">Floor Plans</h1>
          <p className="fp-hero__subtitle">Spaces designed for living</p>
        </div>
      </section>

      <section className="fp">
        <div className="fp__inner reveal" ref={headerRef}>
          <div className="fp__header">
            <span className="fp__eyebrow">Accommodation</span>
            <h2 className="fp__title">Considered plans,<br />calm by design.</h2>
            <p className="fp__intro">
              Complete building floor plans shaped around natural light,
              ventilation and the rhythm of daily life. Explore the
              configurations below.
            </p>
          </div>
        </div>

        <div className="fp__grid reveal" ref={gridRef}>
          {filtered.map((plan, index) => (
            <article className="fp-card" key={plan.id}>
              <div className="fp-card__media">
                <img
                  src={plan.image}
                  alt={plan.alt}
                  className="fp-card__image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="fp-card__body">
                <span className="fp-card__title">{plan.title}</span>
                <h3 className="fp-card__name">{plan.name}</h3>
                <button
                  type="button"
                  className="fp-card__cta"
                  onClick={() => setSelectedIndex(index)}
                >
                  View Floor Plan
                  <span className="fp-card__cta-arrow" aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </article>
          ))}

          {filtered.length === 0 && (
            <p className="fp__empty">No floor plans match this selection.</p>
          )}
        </div>
      </section>

      {selectedIndex >= 0 && filtered[selectedIndex] ? (
        <FloorPlanViewer
          plan={filtered[selectedIndex]}
          onClose={closeViewer}
          onPrev={() => step(-1)}
          onNext={() => step(1)}
        />
      ) : null}
    </>
  );
}
