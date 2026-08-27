import { useReveal } from '../../hooks/useReveal';
import { energies } from '../../data/residences';

export default function Concept({ onNavigate }) {
  const headerRef = useReveal();
  const gridRef = useReveal();

  return (
    <section className="concept" id="concept">
      <div className="concept__inner">
        <div className="concept__header reveal" ref={headerRef}>
          <h2 className="concept__title">with nature.</h2>
          <p className="concept__description">
            PRANA Residences is inspired by six fundamental energies of nature.
            Each home is designed with a unique identity while creating a
            harmonious balance with climate, light, ventilation and Vastu
            principles.
          </p>
        </div>

        <div className="concept__divider" />

        <div className="concept__grid reveal" ref={gridRef}>
          {energies.map((energy) => (
            <button
              className="concept__item"
              key={energy.id}
              onClick={() => onNavigate('energy', energy.id)}
              aria-label={`${energy.name} — ${energy.meaning}`}
            >
              <span className="concept__number">{energy.number}</span>
              <h3 className="concept__name">{energy.name}</h3>
              <p className="concept__meaning">{energy.meaning}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
