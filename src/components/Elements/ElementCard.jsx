import { useReveal } from '../../hooks/useReveal';

export default function ElementCard({ residence }) {
  const ref = useReveal();
  const { number, name, meaning, description, image, imageAlt, reverse } = residence;

  return (
    <article
      className={`element${reverse ? ' element--reverse' : ''}`}
      id={`element-${residence.id}`}
    >
      <div className="element__grid reveal" ref={ref}>
        {!reverse && (
          <div className="element__media">
            <img
              src={image}
              alt={imageAlt}
              className="element__image"
              loading="lazy"
              decoding="async"
            />
          </div>
        )}

        <div className="element__content">
          <span className="element__number">{number}</span>
          <h3 className="element__name">{name}</h3>
          <p className="element__meaning">{meaning}</p>
          <p className="element__description">{description}</p>
        </div>

        {reverse && (
          <div className="element__media">
            <img
              src={image}
              alt={imageAlt}
              className="element__image"
              loading="lazy"
              decoding="async"
            />
          </div>
        )}
      </div>
    </article>
  );
}
