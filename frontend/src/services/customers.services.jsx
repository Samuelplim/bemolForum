import { backendApi } from "../apis/backend.api";



export async function createCustomers(customer) {
  const response = await backendApi.post("/customer",customer);
  return response;
}
