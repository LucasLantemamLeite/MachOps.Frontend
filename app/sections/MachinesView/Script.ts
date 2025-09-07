import type { Machine } from "~/Models/Machine";
import { CallApiService } from "~/Services/CallApiService";

export async function GetAllMachines() {
  try {
    const result = await CallApiService("GetAllMachines", null, 30);
    console.log(result.data);
    return sortMachinesByType(result.data);
  } catch (err) {
    console.error(err);

    return [];
  }
}

function sortMachinesByType(machines: Machine[]) {
  return machines.sort((a, b) => a.machineType - b.machineType);
}
