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