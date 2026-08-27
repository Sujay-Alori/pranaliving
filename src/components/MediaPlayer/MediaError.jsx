export default function MediaError({ onRetry }) {
  return (
    <div className="media-error" role="alert">
      <span className="media-error__mark" aria-hidden="true">!</span>
      <p className="media-error__title">This media could not be loaded.</p>
      <p className="media-error__hint">The file may be missing or unavailable on this device.</p>
      {onRetry && (
        <button type="button" className="media-error__retry" onClick={onRetry}>
          Retry
        </button>
      )}
    </div>
  );
}
