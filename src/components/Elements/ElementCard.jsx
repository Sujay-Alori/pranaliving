import { useReveal } from '../../hooks/useReveal';

export default function ElementCard({ residence }) {
  const ref = useReveal();
  const { number, name, meaning, title, description, image, imageAlt, reverse } = residence;

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

        <div className="element__heading">
          <span className="element__number">{number}</span>
          <h3 className="element__name">{name}</h3>
        </div>

        <div className="element__content">
          <p className="element__meaning">{meaning}</p>
          {title && <p className="element__title">{title}</p>}
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
