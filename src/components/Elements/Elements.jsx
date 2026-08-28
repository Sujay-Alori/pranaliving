import { useReveal } from '../../hooks/useReveal';
import { residences } from '../../data/residences';
import ElementCard from './ElementCard';

export default function Elements({ onNavigate }) {
  const headerRef = useReveal();
  const gridRef = useReveal();

  return (
    <section className="elements" id="elements">
      <div className="elements__header reveal" ref={headerRef}>
        <span className="elements__eyebrow">Featured Works</span>
        <h2 className="elements__title">
          Six identities.<br /> One living idea.
        </h2>
      </div>

      <nav className="elements__quick reveal" ref={gridRef} aria-label="Quick access to elements">
        <p className="elements__quick-label">Select an element to explore</p>
        <div className="elements__quick-grid">
          {residences.map((residence) => (
            <button
              key={residence.id}
              className="elements__quick-item"
              onClick={() => onNavigate('category', residence.number)}
              aria-label={`${residence.number} ${residence.name} — ${residence.meaning}. View ${residence.name} media.`}
            >
              <span className="elements__quick-number">{residence.number}</span>
              <span className="elements__quick-name">{residence.name}</span>
              <span className="elements__quick-meaning">{residence.meaning}</span>
            </button>
          ))}
        </div>
      </nav>

      {residences.map((residence) => (
        <ElementCard
          key={residence.id}
          residence={residence}
          onNavigate={onNavigate}
        />
      ))}
    </section>
  );
}
