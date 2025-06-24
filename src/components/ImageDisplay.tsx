const ImageDisplay = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <img
        src="/uploaded-image.jpg"
        alt="Загруженное изображение"
        className="w-full h-auto rounded-lg shadow-lg object-cover"
      />
    </div>
  );
};

export default ImageDisplay;
