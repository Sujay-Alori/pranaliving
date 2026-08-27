import { useReveal } from '../../hooks/useReveal';
import { residences } from '../../data/residences';
import ElementCard from './ElementCard';

export default function Elements() {
  const headerRef = useReveal();

  return (
    <section className="elements" id="elements">
      <div className="elements__header reveal" ref={headerRef}>
        <h2 className="elements__title">
          Six identities.<br /> One living idea.
        </h2>
      </div>

      {residences.map((residence) => (
        <ElementCard key={residence.id} residence={residence} />
      ))}
    </section>
  );
}
