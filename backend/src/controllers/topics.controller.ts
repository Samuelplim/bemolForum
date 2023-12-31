import { TopicsService } from "../services/topics.services";
import { TopicsRepository } from "../repositories/topics.repository";
import { Request, Response } from "express";

class TopicsController {
  async index(request: Request, response: Response) {
    const topicsRepository = new TopicsRepository();
    const topicsService = new TopicsService(topicsRepository);
    const topics = await topicsService.index();

    return response.status(200).json(topics);
  }

  async findById(request: Request, response: Response) {
    const topicsRepository = new TopicsRepository();
    const topicsService = new TopicsService(topicsRepository);
    const topic = await topicsService.findById(request.body.id);
    return response.status(200).json(topic);
  }

  async create(request: Request, response: Response) {
    const topicsRepository = new TopicsRepository();
    const topicsService = new TopicsService(topicsRepository);
    const topic = await topicsService.create(request.body);

    return response.status(201).json(topic);
  }

  async update(request: Request, response: Response) {
    const topicsRepository = new TopicsRepository();
    const topicsService = new TopicsService(topicsRepository);

    const topic = await topicsService.update(request.body);

    return response.status(200).json(topic);
  }
}

export { TopicsController };
