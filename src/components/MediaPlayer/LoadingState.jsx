export default function LoadingState({ label = 'Loading media' }) {
  return (
    <div className="media-loading" role="status" aria-live="polite">
      <div className="media-loading__spinner" aria-hidden="true" />
      <span className="media-loading__label">{label}</span>
    </div>
  );
}
