import { updateCarOnServer } from './api';
import { renderGarageCars } from './garageView';

export async function handleUpdateCar(
  selectedCarId: number | null,
  nameInput: HTMLInputElement,
  updateButton: HTMLButtonElement,
  colorInput: HTMLInputElement,
  carsContainer: HTMLElement,
): Promise<void> {
  if (!selectedCarId) {
    alert('Please select any car (Select).');
    return;
  }

  const name = nameInput.value.trim();
  const color = colorInput.value;

  if (!name) {
    alert('please enter a new name for the car!');
    nameInput.focus();
    return;
  }

  try {
    await updateCarOnServer(selectedCarId, { name, color });
    selectedCarId = null;
    updateButton.disabled = true;
    nameInput.disabled = true;
    nameInput.value = '';
    colorInput.value = '#ffffff';
    document.querySelectorAll('.car-select-btn').forEach((btn) => {
      (btn as HTMLButtonElement).style.backgroundColor = '#bbd0f4';
    });
    await renderGarageCars(carsContainer);
  } catch (error) {
    console.error(`Failed to update car with id ${selectedCarId}:`, error);
  }
}
