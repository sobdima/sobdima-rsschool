import { Car } from './carBuilder';
import { getCarsFromServer } from './api';
import type { CarData, CarsResponse } from './types';

export async function renderGarageCars(container: HTMLElement): Promise<void> {
  if (!container) {
    console.error('Container element not provided for rendering cars.');
    return;
  }

  const garageCounterElement = document.getElementById('garage-total-count');

  container.innerHTML = '';

  const { cars, totalCount }: CarsResponse = await getCarsFromServer();

  if (garageCounterElement) {
    garageCounterElement.textContent = totalCount.toString();
  }

  if (cars.length === 0) {
    container.innerHTML = '<p>Garage is empty now. Please create your first car!</p>';
    return;
  }

  cars.forEach((carItem: CarData) => {
    const carInstance = new Car(carItem);
    const carElement = carInstance.render();
    container.appendChild(carElement);
  });
}
