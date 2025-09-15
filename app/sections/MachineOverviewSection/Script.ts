import axios, { AxiosError } from "axios";
import type { Machine } from "~/models/MachineModel";
import { callApiService } from "~/services/CallApiService";

export async function getAllMachines(setIsLoading: (v: boolean) => void, setNotification: (message: string, type: "success" | "error" | "warning" | "info", duration: number) => void) {
  setIsLoading(true);

  try {
    const result = await callApiService("GetAllMachines", null, 30);
    setNotification(result.message, "success", 5);

    const machines = result.data ?? [];
    if (machines.length === 0) {
      return [];
    }

    return sortMachinesByType(result.data);
  } catch (err: unknown) {
    let errorMsg = "";
    if (axios.isAxiosError(err)) {
      const data = err.response?.data;

      const firstField = data && Object.values(data)[0];
      if (Array.isArray(firstField) && firstField.length > 0) {
        errorMsg = firstField[0];
      } else if (data?.message) {
        errorMsg = data.message;
      }
    } else if (err instanceof Error) {
      errorMsg = err.message;
    }

    return [];
  } finally {
    setIsLoading(false);
  }
}

export function sortMachinesByType(machines: Machine[]) {
  return [...machines].sort((a, b) => a.type - b.type);
}
