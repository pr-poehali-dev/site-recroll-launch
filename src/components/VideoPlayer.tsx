import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Попытка автозапуска
      video
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Если автозапуск не удался, показываем кнопку play
          setIsPlaying(false);
        });
    }
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black flex items-center justify-center"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        muted={isMuted}
        loop
        playsInline
        preload="auto"
      >
        <source src="/rickroll.mp4" type="video/mp4" />
        <p className="text-white text-center">
          Ваш браузер не поддерживает воспроизведение видео.
        </p>
      </video>

      {/* Overlay controls */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-opacity duration-300 ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex items-center space-x-6">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-4 transition-all duration-200 hover:scale-110"
          >
            <Icon
              name={isPlaying ? "Pause" : "Play"}
              size={32}
              className="text-white"
            />
          </button>

          {/* Mute/Unmute Button */}
          <button
            onClick={toggleMute}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-4 transition-all duration-200 hover:scale-110"
          >
            <Icon
              name={isMuted ? "VolumeX" : "Volume2"}
              size={32}
              className="text-white"
            />
          </button>
        </div>
      </div>

      {/* Инструкция для загрузки видео */}
      <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white p-4 rounded-lg max-w-md">
        <h3 className="font-bold mb-2">Как добавить видео:</h3>
        <ol className="text-sm space-y-1">
          <li>1. Скачайте видео "Never Gonna Give You Up" с YouTube</li>
          <li>2. Переименуйте файл в "rickroll.mp4"</li>
          <li>3. Поместите файл в папку public/</li>
          <li>4. Обновите страницу</li>
        </ol>
      </div>
    </div>
  );
};

export default VideoPlayer;
