import { AxiosError } from "axios";
import type { Machine } from "~/models/MachineModel";
import { callApiService } from "~/services/CallApiService";

export async function GetAllMachines(setIsLoading: (v: boolean) => void, setNotification: (message: string, type: "success" | "error" | "warning" | "info", duration: number) => void) {
  setIsLoading(true);

  try {
    const result = await callApiService("GetAllMachines", null, 30);
    setNotification(result.message, "success", 5);
    return sortMachinesByType(result.data);
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      setNotification(err.response?.data.message ?? err.message ?? "Erro desconhecido.", "error", 4);
    } else if (err instanceof Error) {
      setNotification(err.message, "error", 4);
    } else {
      setNotification(String(err), "error", 4);
    }

    return [];
  } finally {
    setIsLoading(false);
  }
}

function sortMachinesByType(machines: Machine[]) {
  return machines.sort((a, b) => a.type - b.type);
}

export function getStatusColor(color: number) {
  switch (color) {
    case 1:
      return "#00FF37";

    case 2:
      return "#ff0000";

    case 3:
      return "#FFF600";

    default:
      return "#00FF37";
  }
}
