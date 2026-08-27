import { useReveal } from '../../hooks/useReveal';
import heroImg from '../../assets/images/hero.svg';

export default function ClosingSection() {
  const ref = useReveal();

  return (
    <section className="closing" aria-label="Closing">
      <div className="closing__media">
        <img
          src={heroImg}
          alt="PRANA Residences architectural landscape"
          className="closing__image"
          loading="lazy"
          decoding="async"
        />
        <div className="closing__overlay" />
      </div>
      <div className="closing__content reveal" ref={ref}>
        <h2 className="closing__title">A quieter way to live.</h2>
        <p className="closing__description">
          Architecture, interiors and landscape come together around the six
          energies of nature.
        </p>
        <a href="#enquire" className="closing__cta">
          REQUEST A CONVERSATION
        </a>
      </div>
    </section>
  );
}
