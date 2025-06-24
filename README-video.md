
# Видео на сайте

## Текущая настройка
Сайт использует видео с платформы Яндекс.Видео через iframe встраивание.
Текущее видео: `https://yandex.ru/video/preview/10999763909714755023`

## Как изменить видео

### Яндекс.Видео
1. Найдите нужное видео на Яндекс.Видео
2. Скопируйте URL видео в формате `https://yandex.ru/video/preview/ID`
3. В файле `src/components/VideoPlayer.tsx` замените URL в iframe:
```jsx
<iframe
  src="https://yandex.ru/video/preview/ВАШ_ID"
  // остальные атрибуты...
/>
```

### Другие платформы
Для YouTube, Vimeo или других платформ используйте их embed URL:
- YouTube: `https://www.youtube.com/embed/VIDEO_ID`
- Vimeo: `https://player.vimeo.com/video/VIDEO_ID`

## Особенности
- Видео встраивается через iframe
- Управление воспроизведением через встроенный плеер платформы
- Поддерживается полноэкранный режим
- Автоматическая адаптация под размер экрана
