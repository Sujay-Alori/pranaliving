import { useReveal } from '../../hooks/useReveal';

export default function HomeTile({ home, onNavigate }) {
  const ref = useReveal();

  function handleClick() {
    onNavigate('homeDetail', home.id);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  }

  return (
    <article
      className="home-tile reveal"
      ref={ref}
      role="link"
      tabIndex={0}
      aria-label={`${home.name} — ${home.element}. View ${home.name} homes.`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <div className="home-tile__media">
        <img
          src={home.image}
          alt={home.imageAlt}
          className="home-tile__image"
          loading="lazy"
          decoding="async"
        />
        <div className="home-tile__overlay" />
      </div>
      <div className="home-tile__content">
        <span className="home-tile__number">{home.number}</span>
        <h3 className="home-tile__name">{home.name}</h3>
        <p className="home-tile__element">{home.element}</p>
      </div>
      <div className="home-tile__indicator" aria-hidden="true">
        <span className="home-tile__arrow">&rarr;</span>
      </div>
    </article>
  );
}
