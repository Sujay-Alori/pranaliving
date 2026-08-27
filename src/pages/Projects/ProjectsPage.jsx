import { useState, useEffect } from 'react';
import { useReveal } from '../../hooks/useReveal';
import { projects, hero } from '../../data/residences';

export default function ProjectsPage({ onNavigate }) {
  const [loaded, setLoaded] = useState(false);
  const headerRef = useReveal();

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <section className={`projects-hero${loaded ? ' projects-hero--loaded' : ''}`} aria-label="Projects hero">
        <div className="projects-hero__media">
          <img
            src={hero.image}
            alt="PRANA Residences architectural landscape"
            className="projects-hero__image"
            fetchPriority="high"
            decoding="async"
          />
          <div className="projects-hero__overlay" />
        </div>
        <div className="projects-hero__content">
          <span className="projects-hero__eyebrow">(PROJECTS)</span>
          <h1 className="projects-hero__title">
            A collection of spaces,<br /> places and ideas<br /> shaped by context.
          </h1>
        </div>
      </section>

      <section className="projects-page">
        <div className="projects-page__inner">
          <div className="projects-page__grid" ref={headerRef}>
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => onNavigate('project', project.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ProjectCard({ project, index, onClick }) {
  const ref = useReveal();
  const isLarge = index % 3 === 0;
  const isOffset = index % 3 === 1;

  return (
    <article
      className={`project-card${isLarge ? ' project-card--large' : ''}${isOffset ? ' project-card--offset' : ''}`}
      ref={ref}
    >
      <button className="project-card__link reveal" onClick={onClick} aria-label={`View ${project.name}`}>
        <div className="project-card__image-wrap">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="project-card__image"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="project-card__info">
          <h2 className="project-card__name">{project.name}</h2>
          <div className="project-card__meta">
            <span>{project.location}</span>
            <span className="project-card__meta-sep">&mdash;</span>
            <span>{project.year}</span>
          </div>
          <span className="project-card__category">{project.category}</span>
        </div>
      </button>
    </article>
  );
}
