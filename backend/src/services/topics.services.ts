import { TopicsInterface } from "../interfaces";
import { AppError } from "../utils/AppError";

class TopicsService {
  topicsRepository: any;

  constructor(topicsRepository: any) {
    this.topicsRepository = topicsRepository;
  }

  async create(topics: TopicsInterface) {
    if (!topics.title || !topics.content) {
      throw new AppError("Preencha o titulo e a descrição");
    }

    const topic = await this.topicsRepository.create(topics);

    return topic;
  }
}

export { TopicsService };
