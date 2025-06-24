import { useState } from "react";

const VideoPlayer = () => {
  const [showControls, setShowControls] = useState(false);

  return (
    <div
      className="fixed inset-0 bg-black flex items-center justify-center"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <iframe
        src="https://yandex.ru/video/preview/10999763909714755023"
        className="w-full h-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Yandex Video Player"
      />

      {/* Overlay info */}
      <div
        className={`absolute top-4 left-4 bg-black bg-opacity-70 text-white p-4 rounded-lg max-w-md transition-opacity duration-300 ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
      >
        <h3 className="font-bold mb-2">Видео с Яндекс.Видео</h3>
        <p className="text-sm">
          Видео встроено с платформы Яндекс.Видео. Управление воспроизведением
          осуществляется через встроенный плеер.
        </p>
      </div>
    </div>
  );
};

export default VideoPlayer;
