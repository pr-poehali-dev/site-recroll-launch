import VideoPlayer from "@/components/VideoPlayer";
import SoundButton from "@/components/SoundButton";
import ImageDisplay from "@/components/ImageDisplay";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-2">Медиа Центр</h1>
          <p className="text-lg opacity-80">Видео, звуки и изображения</p>
        </div>

        {/* Video Player */}
        <div className="relative">
          <VideoPlayer />
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Sound Button */}
          <div className="flex justify-center">
            <SoundButton />
          </div>

          {/* Image Display */}
          <ImageDisplay />
        </div>
      </div>
    </div>
  );
};

export default Index;
