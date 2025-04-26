import type {
  CarData,
  CarsResponse,
  CarCreateData,
  EngineResponse,
  DriveModeResponse,
} from './types';

const BASE_URL = 'http://127.0.0.1:3000';

export async function getCarsFromServer(): Promise<CarsResponse> {
  const endpoint = '/garage';
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const cars: CarData[] = await response.json();
    const totalCount = cars.length;

    return { cars, totalCount };
  } catch (error) {
    console.error('Failed to fetch cars from server:', error);
    return { cars: [], totalCount: 0 };
  }
}

export async function createCarOnServer(
  carData: CarCreateData,
): Promise<CarData> {
  const endpoint = '/garage';
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(carData),
    });

    if (!response.ok || response.status !== 201) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const newCar: CarData = await response.json();
    return newCar;
  } catch (error) {
    console.error('Failed to create car on server:', error);
    throw error;
  }
}

export async function deleteCarOnServer(id: number): Promise<void> {
  const endpoint = `/garage/${id}`;
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error('Failed to delete car from server:', error);
    throw error;
  }
}

export async function updateCarOnServer(
  id: number,
  data: { name: string; color: string },
): Promise<CarData> {
  const endpoint = `/garage/${id}`;
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const updatedCar: CarData = await response.json();
    return updatedCar;
  } catch (error) {
    console.error('Failed to update car on server:', error);
    throw error;
  }
}

export async function controlEngine(
  id: number,
  status: 'started' | 'stopped',
): Promise<EngineResponse> {
  const endpoint = `/engine?id=${id}&status=${status}`;
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'PATCH',
    });
    if (!response.ok) {
      throw new Error(
        `API Error (${status}): ${response.status} ${response.statusText}`,
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Failed to ${status} engine for car ${id}:`, error);
    throw error;
  }
}

export async function switchToDriveMode(
  id: number,
): Promise<DriveModeResponse> {
  const endpoint = `/engine?id=${id}&status=drive`;
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'PATCH',
    });

    if (response.status === 500) {
      console.log('ДВИЖОК УПАУ!');
      console.error(`Engine broke down for car ${id} during drive mode.`);
      throw new Error(`Engine Failure (500) for car ${id}`);
    }

    if (!response.ok) {
      throw new Error(
        `API Error (drive): ${response.status} ${response.statusText}`,
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Failed to switch car ${id} to drive mode:`, error);
    throw error;
  }
}
