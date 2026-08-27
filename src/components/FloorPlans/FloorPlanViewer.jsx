import { useEffect, useRef, useCallback } from 'react';

export default function FloorPlanViewer({ plan, onClose }) {
  const closeRef = useRef(null);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (plan) {
      document.body.classList.add('no-scroll');
      document.addEventListener('keydown', handleKeyDown);
      closeRef.current?.focus();
    }
    return () => {
      document.body.classList.remove('no-scroll');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [plan, handleKeyDown]);

  if (!plan) return null;

  return (
    <div
      className="lightbox open"
      role="dialog"
      aria-label="Floor plan viewer"
      aria-hidden={!plan}
    >
      <div className="lightbox__backdrop" onClick={onClose} />
      <div className="lightbox__content">
        <img src={plan.image} alt={plan.alt} className="lightbox__image" />
        <button
          ref={closeRef}
          className="lightbox__close"
          onClick={onClose}
          aria-label="Close floor plan viewer"
        >
          &times;
        </button>
        <p className="lightbox__title">{plan.name} &mdash; {plan.size}</p>
      </div>
    </div>
  );
}
