import { Request, Response } from "express";
import { SessionsRepository } from "../repositories/sessions.repository";
import { SessionsService } from "../services/sessions.services";

class SessionsController {
  async create(request: Request, response: Response) {
    const sessionsRepository = new SessionsRepository();
    const sessionsService = new SessionsService(sessionsRepository);

    const sessions = await sessionsService.create(request.body);

    return response.status(201).json(sessions);
  }
}

export { SessionsController };
