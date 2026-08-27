export function MediaControlButton({ label, onClick, disabled, active, className = '', children }) {
  return (
    <button
      type="button"
      className={`media-ctl${active ? ' media-ctl--active' : ''} ${className}`.trim()}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      aria-pressed={active != null ? active : undefined}
    >
      {children}
    </button>
  );
}

export function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="media-ctl__icon">
      <path d="M8 5v14l11-7z" fill="currentColor" />
    </svg>
  );
}

export function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="media-ctl__icon">
      <path d="M6 5h4v14H6zM14 5h4v14h-4z" fill="currentColor" />
    </svg>
  );
}

export function VolumeIcon({ muted }) {
  if (muted) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="media-ctl__icon">
        <path
          d="M16.5 12a4.5 4.5 0 0 0-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.9 8.9 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"
          fill="currentColor"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="media-ctl__icon">
      <path
        d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05A4.5 4.5 0 0 0 16.5 12zM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06c4.45-.5 8-4.09 8-8.77s-3.55-8.27-8-8.77z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ExpandIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="media-ctl__icon">
      <path
        d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
        fill="currentColor"
      />
    </svg>
  );
}

export function CompressIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="media-ctl__icon">
      <path
        d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"
        fill="currentColor"
      />
    </svg>
  );
}

export function FullScreenIcon({ isFull }) {
  return isFull ? <CompressIcon /> : <ExpandIcon />;
}
