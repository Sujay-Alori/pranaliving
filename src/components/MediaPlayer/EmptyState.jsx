export default function EmptyState({ title = 'No media available', message }) {
  return (
    <div className="media-empty" role="status">
      <span className="media-empty__mark" aria-hidden="true">—</span>
      <p className="media-empty__title">{title}</p>
      {message && <p className="media-empty__message">{message}</p>}
    </div>
  );
}
