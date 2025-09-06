export interface Machine {
  id: number;
  name: string;
  machineType: number;
  status: number;
  createdAt: Date;
  lastUpdatedAt: Date;
  location?: string | null;
  description?: string | null;
  start?: Date | null;
  return?: Date | null;
}
