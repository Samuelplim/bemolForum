import { TopicsInterface } from "../interfaces";
import { AppError } from "../utils/AppError";

class TopicsService {
  topicsRepository: any;

  constructor(topicsRepository: any) {
    this.topicsRepository = topicsRepository;
  }

  async index() {
    return await this.topicsRepository.index();
  }

  async findById(topicId: Partial<TopicsInterface>) {
    const topic = await this.topicsRepository.findById(topicId);
    if (!topic) {
      throw new AppError("Tópico não encontrado", 404);
    }
    return topic;
  }

  async create(topics: TopicsInterface) {
    if (!topics.title || !topics.content) {
      throw new AppError("Preencha o titulo e a descrição");
    }

    const topic = await this.topicsRepository.create(topics);

    return topic;
  }

  async update(topic: TopicsInterface) {
    if (!(await this.topicsRepository.findById(topic._id))) {
      throw new AppError("Erro topico não encontrado");
    }
    const res = await this.topicsRepository.update(topic._id, topic);
    if (!res) {
      throw new AppError("Erro topico não encontrado");
    }
    return res;
  }
}

export { TopicsService };
