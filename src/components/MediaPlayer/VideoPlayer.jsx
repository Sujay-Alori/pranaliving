import { useCallback, useEffect, useRef, useState } from 'react';
import MediaNavigation from './MediaNavigation';
import MediaError from './MediaError';
import {
  MediaControlButton,
  PlayIcon,
  PauseIcon,
  VolumeIcon,
  FullScreenIcon,
} from './MediaControls';

const SPEEDS = [0.5, 0.75, 1, 1.25, 1.5, 2];

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const mm = h > 0 ? m.toString().padStart(2, '0') : m;
  return `${h > 0 ? h + ':' : ''}${mm}:${s.toString().padStart(2, '0')}`;
}

export default function VideoPlayer({ videos, title }) {
  const [index, setIndex] = useState(0);
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const hideTimer = useRef(null);

  const [status, setStatus] = useState('loading'); // loading | ready | error
  const [isPlaying, setIsPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFull, setIsFull] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [controlsVisible, setControlsVisible] = useState(true);

  const total = videos.length;
  const video = videos[index];
  const showPrevNext = total > 1;

  const goPrev = useCallback(() => {
    setIndex((i) => (i > 0 ? i - 1 : total - 1));
  }, [total]);
  const goNext = useCallback(() => {
    setIndex((i) => (i < total - 1 ? i + 1 : 0));
  }, [total]);

  const showControls = useCallback(() => {
    setControlsVisible(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setControlsVisible(false), 2800);
  }, []);

  useEffect(() => {
    return () => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, []);

  const resetMedia = useCallback(() => {
    setStatus('loading');
    setCurrent(0);
    setDuration(0);
    setIsPlaying(false);
    setIsMuted(false);
    setVolume(1);
  }, []);

  useEffect(() => {
    resetMedia();
  }, [index, resetMedia]);

  function onLoadedMetadata() {
    const v = videoRef.current;
    if (v) {
      v.volume = volume;
      setDuration(v.duration || 0);
      setStatus('ready');
    }
  }

  function onCanPlay() {
    setStatus('ready');
  }

  function togglePlay() {
    const v = videoRef.current;
    if (!v || status === 'error') return;
    if (v.paused) {
      v.play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    } else {
      v.pause();
      setIsPlaying(false);
    }
    showControls();
  }

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onTime = () => setCurrent(v.currentTime);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => {
      setIsPlaying(false);
      showControls();
    };
    v.addEventListener('timeupdate', onTime);
    v.addEventListener('play', onPlay);
    v.addEventListener('pause', onPause);
    v.addEventListener('ended', onEnded);
    return () => {
      v.removeEventListener('timeupdate', onTime);
      v.removeEventListener('play', onPlay);
      v.removeEventListener('pause', onPause);
      v.removeEventListener('ended', onEnded);
    };
  }, [video, showControls]);

  function onSeek(e) {
    const v = videoRef.current;
    if (!v) return;
    const pct = Number(e.target.value) / 100;
    const t = pct * (duration || 0);
    v.currentTime = t;
    setCurrent(t);
  }

  function onVolume(e) {
    const v = videoRef.current;
    const val = Number(e.target.value) / 100;
    setVolume(val);
    setIsMuted(val === 0);
    if (v) v.volume = val;
    showControls();
  }

  function toggleMute() {
    const v = videoRef.current;
    const next = !isMuted;
    setIsMuted(next);
    if (v) v.muted = next;
    showControls();
  }

  function cycleSpeed() {
    const idx = SPEEDS.indexOf(speed);
    const next = SPEEDS[(idx + 1) % SPEEDS.length];
    const v = videoRef.current;
    if (v) v.playbackRate = next;
    setSpeed(next);
    showControls();
  }

  function requestFullscreen() {
    const el = containerRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
      return;
    }
    el.requestFullscreen?.().catch(() => {});
  }

  useEffect(() => {
    function onFs() {
      setIsFull(Boolean(document.fullscreenElement));
    }
    document.addEventListener('fullscreenchange', onFs);
    return () => document.removeEventListener('fullscreenchange', onFs);
  }, []);

  function handleKeyDown(e) {
    const t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) {
      return;
    }
    if ([' ', 'Spacebar', 'k'].includes(e.key)) {
      e.preventDefault();
      togglePlay();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const v = videoRef.current;
      if (v) {
        v.currentTime = Math.max(0, v.currentTime - 5);
        showControls();
      }
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      const v = videoRef.current;
      if (v) {
        v.currentTime = Math.min(v.duration || 0, v.currentTime + 5);
        showControls();
      }
    } else if (e.key.toLowerCase() === 'm') {
      toggleMute();
    } else if (e.key === 'f') {
      requestFullscreen();
    }
  }
  const keyHandlerRef = useRef(handleKeyDown);
  keyHandlerRef.current = handleKeyDown;
  useEffect(() => {
    function onKey(e) {
      keyHandlerRef.current(e);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);



  const pct = duration > 0 ? (current / duration) * 100 : 0;

  return (
    <div
      className={`media-player__surface media-video${isFull ? ' media-video--full' : ''}`}
      ref={containerRef}
      onClick={() => showControls()}
      onMouseMove={() => showControls()}
    >
      <div className="media-video__stage">
        {status === 'error' ? (
          <MediaError onRetry={() => resetMedia()} />
        ) : (
          <video
            key={video.src}
            ref={videoRef}
            className="media-video__media"
            src={video.src}
            type={video.type || 'video/mp4'}
            poster={video.poster}
            preload="metadata"
            playsInline
            onClick={togglePlay}
            onLoadedMetadata={onLoadedMetadata}
            onCanPlay={onCanPlay}
            onError={() => setStatus('error')}
          />
        )}
      </div>

      <div
        className={`media-video__overlay${controlsVisible ? ' media-video__overlay--visible' : ''}`}
      >
        <div className="media-video__top">
          <span className="media-video__title">{video.title || title || 'Video'}</span>
          {showPrevNext && (
            <span className="media-video__counter">
              <strong>{index + 1}</strong> / {total}
            </span>
          )}
        </div>

        <div className="media-video__center">
          <MediaControlButton
            label={isPlaying ? 'Pause' : 'Play'}
            onClick={togglePlay}
            className="media-video__play"
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </MediaControlButton>
        </div>

        <div className="media-video__bottom">
          {showPrevNext && (
            <MediaNavigation
              onPrev={goPrev}
              onNext={goNext}
              hasPrev
              hasNext
              prevLabel="Previous video"
              nextLabel="Next video"
            />
          )}
          <div className="media-video__bar">
            <input
              className="media-video__seek"
              type="range"
              min="0"
              max="100"
              step="0.1"
              value={pct}
              onChange={onSeek}
              aria-label="Seek"
            />
            <div className="media-video__time">
              <span>{formatTime(current)}</span>
              <span className="media-video__time-sep">/</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
          <div className="media-video__tools">
            <MediaControlButton label="Play / pause" onClick={togglePlay}>
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </MediaControlButton>
            <MediaControlButton label={isMuted ? 'Unmute' : 'Mute'} onClick={toggleMute} active={isMuted}>
              <VolumeIcon muted={isMuted} />
            </MediaControlButton>
            <input
              className="media-video__volume"
              type="range"
              min="0"
              max="100"
              step="1"
              value={isMuted ? 0 : volume * 100}
              onChange={onVolume}
              aria-label="Volume"
            />
            <MediaControlButton label={`Playback speed ${speed}x`} onClick={cycleSpeed} className="media-video__speed">
              <span className="media-video__speed-label">{speed}x</span>
            </MediaControlButton>
            <MediaControlButton
              label={isFull ? 'Exit fullscreen' : 'Enter fullscreen'}
              onClick={requestFullscreen}
            >
              <FullScreenIcon isFull={isFull} />
            </MediaControlButton>
          </div>
        </div>
      </div>
    </div>
  );
}
