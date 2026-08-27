export default function MediaNavigation({
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  prevLabel = 'Previous',
  nextLabel = 'Next',
}) {
  return (
    <div className="media-nav">
      <button
        type="button"
        className="media-nav__btn media-nav__btn--prev"
        onClick={onPrev}
        disabled={!hasPrev}
        aria-label={prevLabel}
      >
        <span aria-hidden="true">←</span>
      </button>
      <button
        type="button"
        className="media-nav__btn media-nav__btn--next"
        onClick={onNext}
        disabled={!hasNext}
        aria-label={nextLabel}
      >
        <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}
