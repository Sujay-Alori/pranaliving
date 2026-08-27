import { useReveal } from '../../hooks/useReveal';
import { studio } from '../../data/residences';

export default function Intro() {
  const ref = useReveal();

  return (
    <section className="intro" id="intro">
      <div className="intro__inner reveal" ref={ref}>
        <span className="intro__eyebrow">{studio.eyebrow}</span>
        <h2 className="intro__headline">{studio.headline}</h2>
        <p className="intro__description">{studio.description}</p>
        <a href="#concept" className="intro__cta">
          DISCOVER THE STUDIO
        </a>
      </div>
    </section>
  );
}
