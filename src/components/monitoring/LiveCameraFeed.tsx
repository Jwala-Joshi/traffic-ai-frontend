import {
  Camera,
  Circle,
  Maximize,
} from 'lucide-react'

import type { Camera as CameraType } from '../../types/monitoring'

interface LiveCameraFeedProps {
  camera: CameraType
}

function LiveCameraFeed({
  camera,
}: LiveCameraFeedProps) {
  const isOnline =
    camera.worker.online

  const streamUrl =
    camera.playback.hls_url

  return (
    <section className="monitoring-feed-panel">
      <div className="monitoring-feed-header">
        <div>
          <h3>{camera.name}</h3>

          <span>
            {camera.district},{' '}
            {camera.municipality}
          </span>
        </div>

        <div className="monitoring-feed-meta">
          <span>
            {camera.worker.fps
              ? `${camera.worker.fps} FPS`
              : 'FPS unavailable'}
          </span>

          <span>
            {isOnline ? 'Online' : 'Offline'}
          </span>
        </div>
      </div>

      <div
        className={`monitoring-feed ${
          !isOnline ? 'offline' : ''
        }`}
      >
        {isOnline && streamUrl ? (
          <>
            <video
              className="monitoring-video"
              src={streamUrl}
              autoPlay
              muted
              controls
              playsInline
            />

            <div className="monitoring-live-indicator">
              <Circle
                size={8}
                fill="currentColor"
              />
              LIVE
            </div>

            <button
              className="monitoring-fullscreen-button"
              aria-label="Fullscreen"
            >
              <Maximize size={18} />
            </button>

            <div className="monitoring-feed-overlay">
              <span>
                {new Date().toLocaleTimeString()}
              </span>
            </div>
          </>
        ) : (
          <div className="monitoring-feed-placeholder">
            <Camera size={42} />

            <span>
              {!isOnline
                ? 'Camera Offline'
                : 'Video Unavailable'}
            </span>

            <small>
              {!isOnline
                ? 'No video signal available'
                : 'No playable video stream is available'}
            </small>
          </div>
        )}
      </div>
    </section>
  )
}

export default LiveCameraFeed