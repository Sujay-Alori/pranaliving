import { useCallback, useEffect, useRef, useState } from 'react';
import MediaNavigation from './MediaNavigation';
import MediaError from './MediaError';
import { MediaControlButton, FullScreenIcon } from './MediaControls';

export default function ImagePlayer({ images, subtitle }) {
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isFull, setIsFull] = useState(false);
  const [swipeDir, setSwipeDir] = useState(null);
  const [keyDir, setKeyDir] = useState(null);
  const containerRef = useRef(null);
  const touchStartX = useRef(null);

  const total = images.length;
  const image = images[index];

  const goPrev = useCallback(() => {
    setIndex((i) => (i > 0 ? i - 1 : i));
  }, []);
  const goNext = useCallback(() => {
    setIndex((i) => (i < total - 1 ? i + 1 : i));
  }, [total]);
  const goTo = useCallback((i) => {
    if (i >= 0 && i < total) setIndex(i);
  }, [total]);

  const resetMedia = useCallback(() => {
    setIsLoading(true);
    setHasError(false);
    setSwipeDir(null);
    setKeyDir(null);
  }, []);

  useEffect(() => {
    resetMedia();
  }, [index, resetMedia]);

  const requestFullscreen = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
      return;
    }
    el.requestFullscreen?.().catch(() => {});
  }, []);

  useEffect(() => {
    function onFsChange() {
      setIsFull(Boolean(document.fullscreenElement));
    }
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  useEffect(() => {
    function onKey(e) {
      const t = e.target;
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) {
        return;
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setKeyDir('left');
        goPrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setKeyDir('right');
        goNext();
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goPrev, goNext]);

  useEffect(() => {
    if (!keyDir) return;
    const t = setTimeout(() => setKeyDir(null), 350);
    return () => clearTimeout(t);
  }, [keyDir]);

  useEffect(() => {
    if (!swipeDir) return;
    const t = setTimeout(() => setSwipeDir(null), 350);
    return () => clearTimeout(t);
  }, [swipeDir]);

  function onTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e) {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) > 48) {
      if (dx < 0) {
        setSwipeDir('left');
        goNext();
      } else {
        setSwipeDir('right');
        goPrev();
      }
    }
  }

  if (total === 0) {
    return (
      <div className="media-player__surface" ref={containerRef}>
        <EmptyForNoMedia />
      </div>
    );
  }

  const animClass = swipeDir || keyDir ? ` media-image--${swipeDir || keyDir}` : '';

  return (
    <div
      className={`media-player__surface media-image ${isFull ? 'media-image--full' : ''}`}
      ref={containerRef}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="media-image__stage">
        {hasError ? (
          <MediaError onRetry={() => resetMedia()} />
        ) : (
          <>
            {isLoading && <LoadingForImage />}
            <img
              key={image.src}
              className={`media-image__media${animClass}`}
              src={image.src}
              alt={image.alt || subtitle || 'Residence image'}
              draggable={false}
              onLoad={() => setIsLoading(false)}
              onError={() => {
                setIsLoading(false);
                setHasError(true);
              }}
            />
          </>
        )}
      </div>

      <div className="media-image__meta">
        <span className="media-image__counter">
          <strong>{index + 1}</strong> / {total}
        </span>
        {subtitle && <span className="media-image__subtitle">{subtitle}</span>}
      </div>

      <MediaNavigation
        onPrev={goPrev}
        onNext={goNext}
        hasPrev={index > 0}
        hasNext={index < total - 1}
        prevLabel="Previous image"
        nextLabel="Next image"
      />

      <MediaControlButton
        label={isFull ? 'Exit fullscreen' : 'Enter fullscreen'}
        onClick={requestFullscreen}
        className="media-image__fullscreen"
      >
        <FullScreenIcon isFull={isFull} />
      </MediaControlButton>

      {total > 1 && (
        <div className="media-image__dots" role="tablist" aria-label="Image selector">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Image ${i + 1}`}
              className={`media-image__dot${i === index ? ' media-image__dot--active' : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function EmptyForNoMedia() {
  return (
    <p className="media-empty media-image__empty">No images available for this residence.</p>
  );
}

function LoadingForImage() {
  return (
    <>
      <div className="media-image__skeleton" aria-hidden="true" />
      <span className="media-image__loading" role="status">
        Loading image…
      </span>
    </>
  );
}
