import { createCarOnServer } from './api';
import { renderGarageCars } from './garageView';

export async function handleCreateCar(
  nameInput: HTMLInputElement,
  colorInput: HTMLInputElement,
  carsContainer: HTMLElement
): Promise<void> {
  const name = nameInput.value.trim();
  const color = colorInput.value;

  if (!name) {
    alert('Please, insert name for a car!');
    nameInput.focus();
    return;
  }

  try {
    await createCarOnServer({ name, color });
    nameInput.value = '';
    colorInput.value = '#ffffff';
    await renderGarageCars(carsContainer);
  } catch (error) {
    console.error('Failed to create car via API:', error);
  }
}
