export interface CarData {
  id: number;
  name: string;
  color: string;
}

export interface CarsResponse {
  cars: CarData[];
  totalCount: number;
}

export type CarCreateData = Omit<CarData, 'id'>;

export interface EngineResponse {
  velocity: number;
  distance: number;
}

export interface DriveModeResponse {
  success: true;
}

export const carAnimations = new Map<number, number>();