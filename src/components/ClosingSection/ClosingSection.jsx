import { useReveal } from '../../hooks/useReveal';
import heroImg from '../../assets/images/Hero.png';

export default function ClosingSection({ onNavigate }) {
  const ref = useReveal();

  function goFloorPlans(e) {
    e.preventDefault();
    if (onNavigate) onNavigate('floorPlans');
  }

  return (
    <section className="closing" aria-label="Call to action">
      <div className="closing__bg-lines" aria-hidden="true">
        <div className="closing__bg-line" />
        <div className="closing__bg-line" />
        <div className="closing__bg-line" />
        <div className="closing__bg-line" />
      </div>
      <div className="closing__media" aria-hidden="true">
        <img
          src={heroImg}
          alt=""
          className="closing__image"
          loading="lazy"
          decoding="async"
        />
        <div className="closing__overlay" />
      </div>
      <div className="closing__content reveal" ref={ref}>
        <h2 className="closing__title">Let's create something extraordinary together.</h2>
        <div className="closing__actions">
          <a href="#floor-plans" className="closing__cta closing__cta--ghost" onClick={goFloorPlans}>
            VIEW FLOOR PLANS &rarr;
          </a>
          <a href="#enquire" className="closing__cta">
            START A CONVERSATION
          </a>
        </div>
      </div>
    </section>
  );
}
