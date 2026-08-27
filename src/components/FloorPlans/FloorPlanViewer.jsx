import { useEffect, useRef, useCallback, useState } from 'react';

const MIN_ZOOM = 1;
const MAX_ZOOM = 5;

export default function FloorPlanViewer({ plan, onClose, onPrev, onNext }) {
  const [zoom, setZoom] = useState(MIN_ZOOM);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [opening, setOpening] = useState(true);
  const containerRef = useRef(null);
  const dragRef = useRef(null);
  const gestureRef = useRef(null);
  const lastPanRef = useRef({ x: 0, y: 0 });

  const clampPan = useCallback(
    (next) => {
      const el = containerRef.current;
      if (!el) return next;
      const r = el.getBoundingClientRect();
      const maxX = (r.width * (zoom - 1)) / 2 / zoom;
      const maxY = (r.height * (zoom - 1)) / 2 / zoom;
      return {
        x: Math.min(maxX, Math.max(-maxX, next.x)),
        y: Math.min(maxY, Math.max(-maxY, next.y)),
      };
    },
    [zoom]
  );

  useEffect(() => {
    setZoom(MIN_ZOOM);
    setPan({ x: 0, y: 0 });
    lastPanRef.current = { x: 0, y: 0 };
    setOpening(false);
  }, [plan.id]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onPrev?.();
      } else if (e.key === 'ArrowRight') {
        onNext?.();
      } else if (e.key === '+' || e.key === '=') {
        setZoom((z) => Math.min(MAX_ZOOM, z + 0.4));
      } else if (e.key === '-') {
        setZoom((z) => Math.max(MIN_ZOOM, z - 0.4));
      }
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.body.classList.add('no-scroll');
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove('no-scroll');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    if (!zoom || zoom === MIN_ZOOM) {
      setPan((p) => (p.x === 0 && p.y === 0 ? p : { x: 0, y: 0 }));
    }
  }, [zoom]);

  function startDrag(e) {
    dragRef.current = { x: e.clientX, y: e.clientY };
    lastPanRef.current = { ...pan };
  }

  function onMove(e) {
    if (!dragRef.current) return;
    const dx = e.clientX - dragRef.current.x;
    const dy = e.clientY - dragRef.current.y;
    setPan(() => clampPan({ x: lastPanRef.current.x + dx, y: lastPanRef.current.y + dy }));
  }

  function endDrag() {
    dragRef.current = null;
  }

  function onWheel(e) {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.3 : -0.3;
    setZoom((z) => clampZoom(z + delta));
  }

  function clampZoom(z) {
    return Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, z));
  }

  function onTouchStart(e) {
    if (e.touches.length === 2) {
      gestureRef.current = {
        dist: getDist(e.touches),
        zoom,
      };
      dragRef.current = null;
    } else if (e.touches.length === 1) {
      startDrag({ clientX: e.touches[0].clientX, clientY: e.touches[0].clientY });
    }
  }

  function onTouchMove(e) {
    if (e.touches.length === 2 && gestureRef.current) {
      e.preventDefault();
      const dist = getDist(e.touches);
      const ratio = dist / gestureRef.current.dist;
      setZoom((z) => clampZoom(gestureRef.current.zoom * ratio));
    } else if (e.touches.length === 1) {
      onMove({ clientX: e.touches[0].clientX, clientY: e.touches[0].clientY });
    }
  }

  function onTouchEnd() {
    dragRef.current = null;
    gestureRef.current = null;
  }

  function getDist(touches) {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }

  if (!plan) return null;

  return (
    <div
      className={`fp-lightbox${opening ? ' is-opening' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Floor plan viewer"
    >
      <div className="fp-lightbox__backdrop" onClick={onClose} />

      <div
        className="fp-lightbox__stage"
        ref={containerRef}
        onMouseDown={startDrag}
        onMouseMove={onMove}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        onWheel={onWheel}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <img
          src={plan.image}
          alt={plan.alt}
          className="fp-lightbox__image"
          draggable="false"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
          }}
        />
      </div>

      <div className="fp-lightbox__toolbar">
        <div className="fp-lightbox__meta">
          <span className="fp-lightbox__name">{plan.title}</span>
          <span className="fp-lightbox__detail">{plan.name} &middot; {plan.size}</span>
        </div>
        <div className="fp-lightbox__zoom">
          <button type="button" className="fp-lightbox__btn" onClick={() => setZoom((z) => clampZoom(z - 0.4))} aria-label="Zoom out">&minus;</button>
          <span className="fp-lightbox__zoom-label">{Math.round(zoom * 100)}%</span>
          <button type="button" className="fp-lightbox__btn" onClick={() => setZoom((z) => clampZoom(z + 0.4))} aria-label="Zoom in">+</button>
        </div>
      </div>

      <button type="button" className="fp-lightbox__nav fp-lightbox__nav--prev" onClick={onPrev} aria-label="Previous floor plan">
        <span aria-hidden="true">&larr;</span>
      </button>
      <button type="button" className="fp-lightbox__nav fp-lightbox__nav--next" onClick={onNext} aria-label="Next floor plan">
        <span aria-hidden="true">&rarr;</span>
      </button>

      <button type="button" className="fp-lightbox__close" onClick={onClose} aria-label="Close floor plan viewer">
        &times;
      </button>
    </div>
  );
}
