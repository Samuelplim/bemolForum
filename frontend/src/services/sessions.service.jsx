import { backendApi } from "../apis/backend.api";

export async function createSessions(customer) {
  const response = await backendApi.post("/sessions",customer);
  return response;
}

export const setAuthToken = (token) => {
  if (token) {
    // Se um token válido for fornecido, inclua-o no cabeçalho de todas as requisições
    backendApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    // Se o token for nulo ou inválido, remova-o do cabeçalho
    delete backendApi.defaults.headers.common['Authorization'];
  }
};