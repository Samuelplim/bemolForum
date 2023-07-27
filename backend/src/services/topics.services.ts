import { TopicsInterface } from "../interfaces";
import { AppError } from "../utils/AppError";

class TopicsService {
  topicsRepository: any;

  constructor(topicsRepository: any) {
    this.topicsRepository = topicsRepository;
  }

  async create(topics: TopicsInterface) {
    throw new AppError("Tamanho mínimo para senha é de 8 dígitos");

    return;
  }
}

export { TopicsService };
