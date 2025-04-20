import {
  addCarToStorage,
  renderCar,
  updateGarageCounter,
} from './localStorage';

const SERVER_URL = 'http://127.0.0.1:3000';

interface CarData {
  id: number;
  name: string;
  color: string;
}

export async function createCarOnServerAndRender(
  name: string,
  color: string,
  carsContainer: HTMLElement,
  carNameInput: HTMLInputElement,
  carColorInput: HTMLInputElement,
  garageCounter: HTMLElement,
) {
  try {
    const response = await fetch(`${SERVER_URL}/garage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        color: color,
      }),
    });

    if (response.status !== 201) {
      const errorText = await response.text();
      throw new Error(
        `Server responded with status ${response.status}: ${errorText}`,
      );
    }

    const responseData: CarData = await response.json();
    console.log('Server Response (Success):', responseData);

    addCarToStorage(responseData);
    renderCar(responseData, carsContainer);
    updateGarageCounter(garageCounter);

    if (carNameInput && carColorInput) {
      carNameInput.value = '';
      carColorInput.value = '#ffffff';
    }
  } catch (error) {
    console.error('Failed to create car:', error);
  }
}

export async function getCarsInGarage(page?: number, limit?: number) {
  let url = 'http://127.0.0.1:3000/garage';
  const params = [];
  if (page !== undefined) params.push(`_page=${page}`);
  if (limit !== undefined) params.push(`_limit=${limit}`);
  if (params.length > 0) url += '?' + params.join('&');

  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

  const cars = await response.json();
  const totalCount = response.headers.get('X-Total-Count');
  return { cars, totalCount };
}
