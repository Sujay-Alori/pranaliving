import { useReveal } from '../../hooks/useReveal';
import { energies } from '../../data/residences';

export default function Concept() {
  const headerRef = useReveal();
  const gridRef = useReveal();

  return (
    <section className="concept" id="concept">
      <div className="concept__inner">
        <div className="concept__header reveal" ref={headerRef}>
          <h2 className="concept__title">
            Homes that breathe<br /> with nature.
          </h2>
          <p className="concept__description">
            PRANA Residences is inspired by six fundamental energies of nature.
            Each home is designed with a unique identity while creating a
            harmonious balance with climate, light, ventilation and Vastu
            principles.
          </p>
        </div>

        <div className="concept__energies reveal" ref={gridRef}>
          {energies.map((energy) => (
            <div className="concept__energy" key={energy.id} data-element={energy.id}>
              <span className="concept__energy-number">{energy.number}</span>
              <span className="concept__energy-name">{energy.name}</span>
              <span className="concept__energy-meaning">{energy.meaning}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
