import { Car } from './carBuilder';
const STORAGE_KEY = 'garageCars';


interface CarData {
  id: number;
  name: string;
  color: string;
}

function getCarsFromStorage(): CarData[] {
  const storedCars = localStorage.getItem(STORAGE_KEY);
  if (storedCars) {
    try {
      const carDataArray = JSON.parse(storedCars);
      if (Array.isArray(carDataArray)) {
        return carDataArray;
      }
    } catch (error) {
      console.error('Error parsing cars from localStorage:', error);
      localStorage.removeItem(STORAGE_KEY);
    }
  }
  return [];
}

function saveCarsToStorage(cars: CarData[]): void {
  try {
    const jsonString = JSON.stringify(cars);
    localStorage.setItem(STORAGE_KEY, jsonString);
  } catch (error) {
    console.error('Error saving cars to localStorage:', error);
  }
}

export function addCarToStorage(newCarData: CarData): void {
  const currentCars = getCarsFromStorage();
  currentCars.push(newCarData);
  saveCarsToStorage(currentCars);
}

export function renderCar(carData: CarData, carsContainer: HTMLElement): void {
  if (!carsContainer) {
    console.error('Cannot render car: carsContainer not found.');
    return;
  }
  const carInstance = new Car(carData);
  const carElement = carInstance.render();
  carsContainer.appendChild(carElement);
}

export function loadAndRenderCarsFromStorage(carsContainer: HTMLElement): void {
  const storedCars = getCarsFromStorage();
  if (carsContainer) {
    carsContainer.innerHTML = '';
  } else {
    console.error('Cannot load cars: carsContainer not found.');
    return;
  }

  if (storedCars.length > 0) {
    storedCars.forEach((carData) => {
      renderCar(carData, carsContainer);
    });
  } else {
    console.log('No cars found in localStorage.');
  }
}


export function updateGarageCounter(garageCounter: HTMLElement): void {
  const storedCars = getCarsFromStorage();
  garageCounter.innerText = String(storedCars.length);
}