import { controlEngine, switchToDriveMode } from './api';
import { carAnimations } from './types';

export async function handleStartEngine(carId: number, container: HTMLElement) {
  const startButton = container.querySelector(
    `.car-start-btn[data-id="${carId}"]`,
  ) as HTMLButtonElement;
  const stopButton = container.querySelector(
    `.car-stop-btn[data-id="${carId}"]`,
  ) as HTMLButtonElement;

  if (!startButton || !stopButton) return;

  startButton.disabled = true;

  try {
    // 1. Запускаем двигатель на сервере
    const { velocity, distance } = await controlEngine(carId, 'started');

    // 2. Переключаем в режим Drive
    stopButton.disabled = false; // Разблокируем кнопку Stop
    const drivePromise = switchToDriveMode(carId); // Запускаем запрос drive

    // 3. Запускаем анимацию
    animateCar(carId, velocity, distance, container);

    // 4. Ожидаем завершения запроса drive (он может упасть с ошибкой 500)
    await drivePromise;
  } catch (error) {
    console.error(`Failed to start or drive car ${carId}:`, error);
    // Если произошла ошибка (включая 500 от drive), останавливаем анимацию и сбрасываем состояние
    stopCarAnimation(carId, container); // Останавливаем любую возможную анимацию
    startButton.disabled = false; // Разблокируем Start
    stopButton.disabled = true; // Блокируем Stop
  }
}

/** Обработчик нажатия кнопки Stop */
export async function handleStopEngine(carId: number, container: HTMLElement) {
  const startButton = container.querySelector(
    `.car-start-btn[data-id="${carId}"]`,
  ) as HTMLButtonElement;
  const stopButton = container.querySelector(
    `.car-stop-btn[data-id="${carId}"]`,
  ) as HTMLButtonElement;

  if (!startButton || !stopButton) return;

  stopButton.disabled = true; // Блокируем кнопку Stop

  try {
    // 1. Останавливаем двигатель на сервере (ответ не так важен)
    await controlEngine(carId, 'stopped');

    // 2. Останавливаем анимацию немедленно
    stopCarAnimation(carId, container);

    startButton.disabled = false; // Разблокируем кнопку Start
  } catch (error) {
    console.error(`Failed to stop car ${carId}:`, error);
    // Даже если API вернуло ошибку, пытаемся разблокировать кнопки
    startButton.disabled = false;
    // Stop остается заблокированной, т.к. машина остановлена
  }
}

/** Функция анимации машины */
function animateCar(
  carId: number,
  velocity: number,
  distance: number,
  container: HTMLElement,
) {
  const carIcon = container.querySelector(
    `.car-icon[data-id="${carId}"]`,
  ) as HTMLElement;
  const track = carIcon?.closest('.car-road-container') as HTMLElement;
  const startButton = container.querySelector(
    `.car-start-btn[data-id="${carId}"]`,
  ) as HTMLButtonElement;
  const stopButton = container.querySelector(
    `.car-stop-btn[data-id="${carId}"]`,
  ) as HTMLButtonElement;

  if (!carIcon || velocity <= 0) {
    console.error(
      `Cannot animate car ${carId}: Element not found or zero velocity.`,
    );
    if (startButton) startButton.disabled = false;
    if (stopButton) stopButton.disabled = true;
    return;
  }

  const durationMs = distance / velocity; // Время в миллисекундах по API
  const trackWidth = track.offsetWidth;
  const carWidth = carIcon.offsetWidth;
  const distanceToTravel = trackWidth - carWidth; // Визуальная дистанция

  let startTime: number | null = null;

  const animationStep = (timestamp: number) => {
    if (!startTime) {
      startTime = timestamp;
    }

    const elapsedTime = timestamp - startTime;
    const progress = Math.min(elapsedTime / durationMs, 1); // Прогресс от 0 до 1

    carIcon.style.transform = `translateX(${progress * distanceToTravel}px)`;

    if (progress < 1) {
      // Продолжаем анимацию
      const frameId = requestAnimationFrame(animationStep);
      carAnimations.set(carId, frameId); // Сохраняем ID кадра
    } else {
      // Анимация завершена
      carAnimations.delete(carId); // Удаляем ID из хранилища
      if (startButton) startButton.disabled = false; // Разблокируем Start
      if (stopButton) stopButton.disabled = true; // Блокируем Stop
      // Можно добавить эффект финиша здесь
    }
  };

  // Отменяем предыдущую анимацию, если она была
  stopCarAnimation(carId, container, false); // false - не сбрасывать позицию

  // Запускаем новую анимацию
  const initialFrameId = requestAnimationFrame(animationStep);
  carAnimations.set(carId, initialFrameId);
}

/** Функция остановки анимации машины */
function stopCarAnimation(
  carId: number,
  container: HTMLElement,
  resetPosition = true,
) {
  const animationId = carAnimations.get(carId);
  if (animationId) {
    cancelAnimationFrame(animationId); // Отменяем анимацию
    carAnimations.delete(carId); // Удаляем ID
  }

  if (resetPosition) {
    const carIcon = container.querySelector(
      `.car-icon[data-id="${carId}"]`,
    ) as HTMLElement;
    if (carIcon) {
      carIcon.style.transform = 'translateX(0px)'; // Сбрасываем позицию
    }
  }
  // Сброс состояния кнопок происходит в вызывающих функциях (handleStart/handleStop)
}
