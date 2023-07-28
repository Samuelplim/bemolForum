import { backendApi } from "../apis/backend.api";

export  const indexTopics = async () => {
  const response = await backendApi.get("/topics");
  return response;
}

export  const createTopics = async (topics) => {
  const response = await backendApi.post("/topics",topics);
  return response;
}

export const FindByIdTopics = async (topics) => {
  const response = await backendApi.post("/topics/findById",topics);
  return response;
}