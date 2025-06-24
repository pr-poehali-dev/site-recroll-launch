import { useState } from "react";
import Icon from "@/components/ui/icon";

const SoundButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const playSound = () => {
    if (audio && !audio.paused) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    const newAudio = new Audio("https://soundinstants.com/ru/sound/my-pidory");
    newAudio.play();
    setIsPlaying(true);
    setAudio(newAudio);

    newAudio.addEventListener("ended", () => {
      setIsPlaying(false);
    });
  };

  return (
    <button
      onClick={playSound}
      className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
    >
      <Icon name={isPlaying ? "Pause" : "Play"} size={20} />
      {isPlaying ? "Пауза" : "Воспроизвести звук"}
    </button>
  );
};

export default SoundButton;
