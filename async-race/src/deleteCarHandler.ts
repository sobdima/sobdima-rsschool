import { deleteCarOnServer } from './api';
import { renderGarageCars } from './garageView';

export async function handleDeleteCar(
  carId: number,
  carsContainer: HTMLElement,
): Promise<void> {
  try {
    await deleteCarOnServer(carId);
    await renderGarageCars(carsContainer);
  } catch (error) {
    console.error(`Failed to delete car with id ${carId}:`, error);
  }
}
