import { backendApi } from "../apis/backend.api";

export async function createSessions(customer) {
  const response = await backendApi.post("/sessions",customer);
  return response;
}
