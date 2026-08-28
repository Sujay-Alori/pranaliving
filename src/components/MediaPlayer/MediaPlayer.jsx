import ImagePlayer from './ImagePlayer';
import VideoPlayer from './VideoPlayer';
import EmptyState from './EmptyState';

export default function MediaPlayer({ category }) {
  const hasImages = category.images.length > 0;
  const hasVideos = category.videos.length > 0;

  return (
    <div className="media-player" data-category={category.id}>
      <div className="media-player__body">
        {category.hasNone ? (
          <EmptyState
            title="No media available"
            message="This residence does not have any media to display yet."
          />
        ) : (
          <>
            {hasImages && (
              <div className="media-player__section">
                <ImagePlayer
                  key={`image-${category.id}`}
                  images={category.images}
                  subtitle={category.name}
                />
              </div>
            )}
            {hasVideos && (
              <div className="media-player__section">
                <VideoPlayer
                  key={`video-${category.id}`}
                  videos={category.videos}
                  title={category.name}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
