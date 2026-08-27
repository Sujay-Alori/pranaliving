import { useState } from 'react';
import ImagePlayer from './ImagePlayer';
import VideoPlayer from './VideoPlayer';
import EmptyState from './EmptyState';

export default function MediaPlayer({ category }) {
  const hasImages = category.images.length > 0;
  const hasVideos = category.videos.length > 0;
  const [mode, setMode] = useState(hasVideos ? 'video' : hasImages ? 'image' : 'none');

  function switchMode(next) {
    setMode((cur) => (cur === next ? cur : next));
  }

  return (
    <div className="media-player" data-category={category.id}>
      <MediaTabs
        hasImages={hasImages}
        hasVideos={hasVideos}
        mode={mode}
        onSwitch={switchMode}
      />

      <div className="media-player__body">
        {category.hasNone ? (
          <EmptyState
            title="No media available"
            message="This residence does not have any media to display yet."
          />
        ) : mode === 'image' ? (
          hasImages ? (
            <ImagePlayer
              key={`image-${category.id}`}
              images={category.images}
              subtitle={category.name}
            />
          ) : (
            <EmptyState title="No images available" message="The gallery for this residence is empty." />
          )
        ) : mode === 'video' ? (
          hasVideos ? (
            <VideoPlayer
              key={`video-${category.id}`}
              videos={category.videos}
              title={category.name}
            />
          ) : (
            <EmptyState title="No videos available" message="The video for this residence is not available yet." />
          )
        ) : (
          <EmptyState title="No media available" message="This residence does not have any media yet." />
        )}
      </div>
    </div>
  );
}

function MediaTabs({ hasImages, hasVideos, mode, onSwitch }) {
  const tabs = [];
  if (hasImages) tabs.push({ key: 'image', label: 'Images' });
  if (hasVideos) tabs.push({ key: 'video', label: 'Video' });

  if (tabs.length < 2) return null;

  return (
    <div className="media-player__tabs" role="tablist" aria-label="Media type">
      {tabs.map((t) => (
        <button
          key={t.key}
          type="button"
          role="tab"
          aria-selected={mode === t.key}
          className={`media-player__tab${mode === t.key ? ' media-player__tab--active' : ''}`}
          onClick={() => onSwitch(t.key)}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
