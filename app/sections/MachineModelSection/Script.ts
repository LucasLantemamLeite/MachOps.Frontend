import axios from "axios";
import type { ApiRouterModel } from "~/models/ApiRouterModel";
import { callApiService } from "~/services/CallApiService";

type MachineParameters = {
  e: SubmitEvent;
  setIsLoading: (v: boolean) => void;
  setNotification: (message: string, type: "success" | "error" | "warning" | "info", duration: number) => void;
  setIsOpen: (value: boolean) => void;
};

export async function createNewMachine({ e, setIsLoading, setNotification, setIsOpen }: MachineParameters) {
  e.preventDefault();

  const form = e.target as HTMLFormElement;
  const rawData = Object.fromEntries(new FormData(form));

  const payload = genPayload(rawData);

  await submitMachine({ payload, endpoint: "CreateNewMachine", setIsLoading, setNotification, setIsOpen });
}

export async function updateExistingMachine(machineId: number, { e, setIsLoading, setNotification, setIsOpen }: MachineParameters) {
  e.preventDefault();

  const form = e.target as HTMLFormElement;
  const rawData = Object.fromEntries(new FormData(form));

  const payload = genPayload(rawData, machineId);

  await submitMachine({ payload, endpoint: "UpdateMachine", setIsLoading, setNotification, setIsOpen });
}

type MachinePayload = {
  id?: number;
  name: string;
  type: number;
  status: number;
  location: string | null;
  description: string | null;
  start: Date | null;
  return: Date | null;
};

function genPayload(formData: Record<string, any>, id?: number): MachinePayload {
  const payload: MachinePayload = {
    name: formData.name || "",
    type: Number(formData.type),
    status: Number(formData.status),
    location: formData.location || null,
    description: formData.description || null,
    start: formData.start || null,
    return: formData.return || null,
  };

  if (id !== undefined) payload.id = id;

  return payload;
}

type submitMachineParameters = {
  payload: MachinePayload;
  endpoint: keyof typeof ApiRouterModel;
  setIsLoading: (v: boolean) => void;
  setNotification: (message: string, type: "success" | "error" | "warning" | "info", duration: number) => void;
  setIsOpen: (value: boolean) => void;
};

async function submitMachine({ payload, endpoint, setIsLoading, setNotification, setIsOpen }: submitMachineParameters) {
  setIsLoading(true);

  try {
    const result = await callApiService(endpoint, payload, 30);
    setNotification(result.message, "success", 7);
    setIsOpen(false);
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

    setNotification(errorMsg, "error", 7);
  } finally {
    setIsLoading(false);
  }
}
