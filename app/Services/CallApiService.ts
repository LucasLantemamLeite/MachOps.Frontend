import axios from "axios";
import { ApiRouter } from "~/models/ApiRouter";

const api = axios.create({
  baseURL: "http://localhost:5054/v1",
  timeout: 5000,
});

export async function CallApiService(router: keyof typeof ApiRouter, data: any = null, timeout: number = 5) {
  const route = ApiRouter[router];

  if (!route) throw Error(`A rota: ${router} não existe no objeto ApiRouter.`);

  const config = {
    url: route.path,
    method: route.method,
    data: data ?? null,
    timeout: timeout * 1000,
  };

  try {
    const response = await api.request(config);

    return response.data;
  } catch (err) {
    throw err;
  }
}
