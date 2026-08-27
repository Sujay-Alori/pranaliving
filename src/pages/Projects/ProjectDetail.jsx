import { useEffect } from 'react';
import { useReveal } from '../../hooks/useReveal';
import { projects } from '../../data/residences';

export default function ProjectDetail({ projectId, onNavigate }) {
  const projectIndex = projects.findIndex((p) => p.id === projectId);
  const project = projects[projectIndex];
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  const heroRef = useReveal();
  const introRef = useReveal();
  const infoRef = useReveal();
  const descRef = useReveal();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [projectId]);

  if (!project) {
    return (
      <section className="project-detail">
        <div className="project-detail__inner">
          <p className="project-detail__empty">Project not found.</p>
          <button className="project-detail__back" onClick={() => onNavigate('projects')}>
            &larr; Back to Projects
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="project-detail">
      <div className="project-detail__inner">
        <button className="project-detail__back" onClick={() => onNavigate('projects')}>
          &larr; All Projects
        </button>

        <div className="project-detail__hero reveal" ref={heroRef}>
          <div className="project-detail__hero-image-wrap">
            <img
              src={project.image}
              alt={project.imageAlt}
              className="project-detail__hero-image"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className="project-detail__hero-info">
            <h1 className="project-detail__title">{project.name}</h1>
            <div className="project-detail__hero-meta">
              <span>{project.location}</span>
              <span className="project-detail__meta-sep">&mdash;</span>
              <span>{project.year}</span>
              <span className="project-detail__meta-sep">&mdash;</span>
              <span>{project.category}</span>
            </div>
          </div>
        </div>

        <div className="project-detail__statement reveal" ref={introRef}>
          <p className="project-detail__statement-text">{project.statement}</p>
        </div>

        <div className="project-detail__info-grid reveal" ref={infoRef}>
          <div className="project-detail__info-item">
            <span className="project-detail__info-label">PROJECT</span>
            <span className="project-detail__info-value">{project.name}</span>
          </div>
          <div className="project-detail__info-item">
            <span className="project-detail__info-label">LOCATION</span>
            <span className="project-detail__info-value">{project.location}</span>
          </div>
          <div className="project-detail__info-item">
            <span className="project-detail__info-label">YEAR</span>
            <span className="project-detail__info-value">{project.year}</span>
          </div>
          <div className="project-detail__info-item">
            <span className="project-detail__info-label">TYPE</span>
            <span className="project-detail__info-value">{project.category}</span>
          </div>
          <div className="project-detail__info-item">
            <span className="project-detail__info-label">ARCHITECT</span>
            <span className="project-detail__info-value">{project.architect}</span>
          </div>
          <div className="project-detail__info-item">
            <span className="project-detail__info-label">STATUS</span>
            <span className="project-detail__info-value">{project.status}</span>
          </div>
        </div>

        <div className="project-detail__full-image">
          <img
            src={project.gallery[0]}
            alt={`${project.name} full view`}
            className="project-detail__full-img"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="project-detail__description reveal" ref={descRef}>
          <p>{project.description}</p>
        </div>

        <div className="project-detail__gallery">
          {project.gallery.map((img, i) => (
            <div className="project-detail__gallery-item" key={i}>
              <img
                src={img}
                alt={`${project.name} detail ${i + 1}`}
                className="project-detail__gallery-img"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>

        <div className="project-detail__nav">
          {prevProject ? (
            <button
              className="project-detail__nav-btn project-detail__nav-btn--prev"
              onClick={() => onNavigate('project', prevProject.id)}
            >
              <span className="project-detail__nav-label">PREVIOUS</span>
              <span className="project-detail__nav-name">{prevProject.name}</span>
            </button>
          ) : <div />}
          {nextProject ? (
            <button
              className="project-detail__nav-btn project-detail__nav-btn--next"
              onClick={() => onNavigate('project', nextProject.id)}
            >
              <span className="project-detail__nav-label">NEXT</span>
              <span className="project-detail__nav-name">{nextProject.name}</span>
            </button>
          ) : <div />}
        </div>
      </div>
    </section>
  );
}
