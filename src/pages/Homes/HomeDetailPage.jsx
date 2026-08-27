import { useState, useEffect, useRef } from 'react';
import { homes, projects } from '../../data/residences';

export default function HomeDetailPage({ homeId, onNavigate }) {
  const [loaded, setLoaded] = useState(false);
  const homeIndex = homes.findIndex((h) => h.id === homeId);
  const home = homes[homeIndex];
  const prevHome = homeIndex > 0 ? homes[homeIndex - 1] : null;
  const nextHome = homeIndex < homes.length - 1 ? homes[homeIndex + 1] : null;

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, [homeId]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [homeId]);

  if (!home) {
    return (
      <section className="home-detail">
        <div className="home-detail__inner">
          <p className="home-detail__empty">Home not found.</p>
          <button className="home-detail__back" onClick={() => onNavigate('homes')}>
            &larr; ALL HOMES
          </button>
        </div>
      </section>
    );
  }

  const relatedProjects = (home.related || [])
    .map((rid) => projects.find((p) => p.id === rid))
    .filter(Boolean);

  return (
    <section className="home-detail">
      <div className="home-detail__inner">
        <button className="home-detail__back" onClick={() => onNavigate('homes')}>
          &larr; ALL HOMES
        </button>

        <div className={`home-hero${loaded ? ' home-hero--loaded' : ''}`}>
          <div className="home-hero__media">
            <img
              src={home.image}
              alt={home.heroAlt}
              className="home-hero__image"
              decoding="async"
            />
          </div>
          <div className="home-hero__overlay" />
          <div className="home-hero__content">
            <button className="home-hero__back" onClick={() => onNavigate('homes')}>
              &larr; ALL HOMES
            </button>
            <span className="home-hero__number">{home.number}</span>
            <h1 className="home-hero__title">{home.name}</h1>
            <p className="home-hero__element">{home.elementFull}</p>
          </div>
        </div>

        <div className="home-intro">
          <span className="home-intro__label">(INTRODUCTION)</span>
          <p className="home-intro__tagline">{home.tagline}</p>
          <p className="home-intro__text">{home.description}</p>
          <p className="home-intro__meta">{home.experience}</p>
        </div>

        <div className="home-experience">
          <p className="home-experience__text">{home.tagline}</p>
        </div>

        {home.video && (
          <HomeVideo video={home.video} title={home.name} />
        )}

        <div className="home-features">
          <span className="home-features__label">(FEATURES)</span>
          <h2 className="home-features__title">What defines {home.name}</h2>
          <div className="home-features__grid">
            {home.features.map((feat, i) => (
              <div className="home-features__item" key={i}>
                <span className="home-features__number">{String(i + 1).padStart(2, '0')}</span>
                <p className="home-features__text">{feat}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="home-material">
          <div className="home-material__content">
            <span className="home-material__label">(MATERIAL)</span>
            <h2 className="home-material__name">{home.material}</h2>
            <p className="home-material__detail">{home.materialDetail}</p>
            <p className="home-material__mood">{home.mood}</p>
          </div>
        </div>

        {home.gallery && home.gallery.length > 0 && (
          <div className="home-gallery">
            <span className="home-gallery__label">(GALLERY)</span>
            <div className="home-gallery__grid">
              {home.gallery.map((img, i) => (
                <div className={`home-gallery__item${i === 0 ? ' home-gallery__item--full' : ''}`} key={i}>
                  <img src={img} alt={`${home.name} gallery image ${i + 1}`} className="home-gallery__img" loading="lazy" decoding="async" />
                </div>
              ))}
            </div>
          </div>
        )}

        {relatedProjects.length > 0 && (
          <div className="home-related">
            <span className="home-related__label">(RELATED PROJECTS)</span>
            <div className="home-related__grid">
              {relatedProjects.map((project) => (
                <button
                  className="home-related__card"
                  key={project.id}
                  onClick={() => onNavigate('project', project.id)}
                >
                  <div className="home-related__image-wrap">
                    <img src={project.image} alt={project.imageAlt} className="home-related__image" loading="lazy" decoding="async" />
                  </div>
                  <div className="home-related__info">
                    <h3 className="home-related__name">{project.name}</h3>
                    <p className="home-related__meta">
                      <span>{project.location}</span>
                      <span>{project.year}</span>
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="home-nav">
          {prevHome ? (
            <button
              className="home-nav__btn home-nav__btn--prev"
              onClick={() => onNavigate('homeDetail', prevHome.id)}
            >
              <span className="home-nav__label">PREVIOUS</span>
              <span className="home-nav__name">{prevHome.name}</span>
              <span className="home-nav__element">{prevHome.element}</span>
            </button>
          ) : (
            <div className="home-nav__btn home-nav__btn--prev" />
          )}
          {nextHome ? (
            <button
              className="home-nav__btn home-nav__btn--next"
              onClick={() => onNavigate('homeDetail', nextHome.id)}
            >
              <span className="home-nav__label">NEXT</span>
              <span className="home-nav__name">{nextHome.name}</span>
              <span className="home-nav__element">{nextHome.element}</span>
            </button>
          ) : (
            <div className="home-nav__btn home-nav__btn--next" />
          )}
        </div>
      </div>
    </section>
  );
}

function HomeVideo({ video, title }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrent] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const hideTimer = useRef(null);

  function togglePlay() {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      el.play();
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  }

  function onTimeUpdate() {
    const el = videoRef.current;
    if (!el) return;
    setCurrent(el.currentTime);
    setProgress(el.duration ? (el.currentTime / el.duration) * 100 : 0);
  }

  function onSeek(e) {
    const el = videoRef.current;
    if (!el) return;
    el.currentTime = (e.target.value / 100) * el.duration;
  }

  function formatTime(s) {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec < 10 ? '0' : ''}${sec}`;
  }

  function handleMouseMove() {
    setShowControls(true);
    clearTimeout(hideTimer.current);
    if (playing) {
      hideTimer.current = setTimeout(() => setShowControls(false), 3000);
    }
  }

  return (
    <div className="home-video" onMouseMove={handleMouseMove}>
      <span className="home-video__label">(VIDEO)</span>
      <div className="home-video__surface" onClick={togglePlay}>
        <div className="home-video__stage">
          <video
            ref={videoRef}
            className="home-video__media"
            src={video}
            onTimeUpdate={onTimeUpdate}
            onLoadedMetadata={(e) => setDuration(e.target.duration)}
            onEnded={() => setPlaying(false)}
            playsInline
            preload="metadata"
          />
        </div>
        <div className={`home-video__overlay${playing && showControls ? ' home-video__overlay--visible' : ''}`}>
          <div className="home-video__center">
            <button className="home-video__play" aria-label={playing ? `Pause ${title}` : `Play ${title}`}>
              {playing ? (
                <svg className="home-video__play-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" />
                </svg>
              ) : (
                <svg className="home-video__play-icon" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              )}
            </button>
          </div>
          <div className="home-video__bottom">
            <div className="home-video__bar">
              <input
                type="range"
                className="home-video__seek"
                min="0"
                max="100"
                value={progress}
                onChange={onSeek}
                aria-label="Seek video"
              />
              <div className="home-video__time">
                <span>{formatTime(currentTime)}</span>
                <span className="home-video__time-sep">/</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
            <div className="home-video__tools">
              <button className="home-video__tool" onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}>
                {playing ? (
                  <svg className="home-video__tool-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" />
                  </svg>
                ) : (
                  <svg className="home-video__tool-icon" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
