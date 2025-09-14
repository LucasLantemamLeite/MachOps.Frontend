import axios from "axios";
import { callApiService } from "~/services/CallApiService";

export async function createNewMachine(e: SubmitEvent, setIsLoading: (v: boolean) => void, setNotification: (message: string, type: "success" | "error" | "warning" | "info", duration: number) => void) {
  e.preventDefault();

  const form = e.target as HTMLFormElement;
  const rawData = Object.fromEntries(new FormData(form));

  const payload = createPayLoad(rawData);

  setIsLoading(true);

  try {
    const result = await callApiService("CreateNewMachine", payload, 30);
    setNotification(result.message, "success", 7);
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
    }

    setNotification(errorMsg, "error", 7);
  } finally {
    setIsLoading(false);
  }
}

function createPayLoad(rawData: Record<string, any>) {
  return {
    name: rawData.name || "",
    type: Number(rawData.type),
    status: Number(rawData.status),
    location: rawData.location || null,
    description: rawData.description || null,
    start: rawData.start || null,
    return: rawData.return || null,
  };
}
