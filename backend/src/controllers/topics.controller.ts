import { TopicsService } from "../services/topics.services";
import { TopicsRepository } from "../repositories/topics.repository";
import { Request, Response } from "express";

class TopicsController {
  async create(request: Request, response: Response) {
    const topicsRepository = new TopicsRepository();
    const topicsService = new TopicsService(topicsRepository);
    const topic = await topicsService.create(request.body);

    return response.status(201).json(topic);
  }
}

export { TopicsController };
