export interface Machine {
  id?: number | null;
  name: string;
  type: number;
  status: number;
  createdAt?: Date;
  lastUpdatedAt?: Date;
  location?: string | null;
  description?: string | null;
  start?: Date | null;
  return?: Date | null;
}
