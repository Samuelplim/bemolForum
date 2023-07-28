import { backendApi } from "../apis/backend.api";



export async function createCustomers(topics) {
  const response = await backendApi.post("/customer",topics);
  return response;
}
