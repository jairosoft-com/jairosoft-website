import React from "react";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

interface YouTubeBackgroundProps {
  videoId: string;
}

const YouTubeBackground: React.FC<YouTubeBackgroundProps> = ({ videoId }) => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const playerRef = React.useRef<any>(null);

  React.useEffect(() => {
    if (!videoId || !containerRef.current) return;

    const initPlayer = () => {
      if (!containerRef.current) return;
      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          mute: 1,
          loop: 1,
          playlist: videoId,
          modestbranding: 1,
          rel: 0,
          iv_load_policy: 3,
          fs: 0,
          disablekb: 1,
          playsinline: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: (e: any) => {
            try {
              e.target.mute();
              e.target.playVideo();
            } catch {}
          },
          onStateChange: (e: any) => {
            const YT = window.YT;
            if (!YT) return;
            if (e.data === YT.PlayerState.ENDED) {
              try {
                e.target.seekTo(0, true);
                e.target.playVideo();
              } catch {}
            }
            if (e.data === YT.PlayerState.PLAYING) {
              setIsPlaying(true);
            }
          },
        },
      });
    };

    const loadAPI = () => {
      if (window.YT && window.YT.Player) {
        initPlayer();
        return;
      }
      const existing = document.getElementById("youtube-iframe-api");
      if (existing) return; // will call onYouTubeIframeAPIReady when ready

      const tag = document.createElement("script");
      tag.id = "youtube-iframe-api";
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    };

    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      initPlayer();
      // restore any previous handler
      if (prev) prev();
    };

    loadAPI();

    return () => {
      try {
        if (playerRef.current && playerRef.current.destroy) playerRef.current.destroy();
      } catch {}
    };
  }, [videoId]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full h-screen pointer-events-none transition-opacity duration-500 ${
          isPlaying ? "opacity-100" : "opacity-0"
        }`}
        style={{ width: "177.78vh" }}
      >
        <div ref={containerRef} className="w-full h-full" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/30 to-background/95" />
    </div>
  );
};

export default YouTubeBackground;
