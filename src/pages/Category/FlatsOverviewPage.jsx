import { useReveal } from '../../hooks/useReveal';
import { residences } from '../../data/residences';

export default function FlatsOverviewPage({ onNavigate }) {
  const headerRef = useReveal();

  return (
    <section className="flats-overview">
      <div className="flats-overview__inner">
        <div className="flats-overview__header reveal" ref={headerRef}>
          <span className="flats-overview__eyebrow">Residences</span>
          <h1 className="flats-overview__title">Six identities.<br /> One living idea.</h1>
          <p className="flats-overview__description">
            Each residence is inspired by a fundamental energy of nature.
            Explore the collection to discover how earth, forest, sun, water,
            air and space shape every home.
          </p>
        </div>

        <div className="flats-overview__grid">
          {residences.map((residence) => (
            <FlatsCard
              key={residence.id}
              residence={residence}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FlatsCard({ residence, onNavigate }) {
  const ref = useReveal();

  function handleClick() {
    onNavigate('category', residence.number);
  }

  return (
    <article className="flats-card">
      <button
        className="flats-card__button reveal"
        ref={ref}
        onClick={handleClick}
        aria-label={`${residence.name} — ${residence.meaning}`}
      >
        <div className="flats-card__media">
          <img
            src={residence.image}
            alt={residence.imageAlt}
            className="flats-card__image"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="flats-card__info">
          <span className="flats-card__number">{residence.number}</span>
          <h2 className="flats-card__name">{residence.name}</h2>
          <p className="flats-card__element">{residence.element}</p>
          <p className="flats-card__description">{residence.description}</p>
        </div>
      </button>
    </article>
  );
}
