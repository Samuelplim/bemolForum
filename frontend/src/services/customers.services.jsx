import { backendApi } from "../apis/backend.api";



export async function createCustomers(customer) {
  const response = await backendApi.post("/customer",customer);
  return response;
}

export async function findByEmailCustomers(customer) {
  const response = await backendApi.get("/customer",customer);
  return response;
}

export async function deleteCustomers(customer) {
  const response = await backendApi.delete("/customer",customer);
  return response;
}