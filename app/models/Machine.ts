export interface Machine {
  id: number;
  name: string;
  machineType: number;
  status: number;
  createdAt: string;
  lastUpdatedAt: string;
  location?: string | null;
  description?: string | null;
  start?: string | null;
  return?: string | null;
}
