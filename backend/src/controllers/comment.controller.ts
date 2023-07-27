import { CommentInterface } from "../interfaces";
import { CommentService } from "../services/comment.services";
import { CommentRepository } from "../repositories/comment.repository";
import { Request, Response } from "express";

class CommentController {
  async create(request: Request, response: Response) {
    const { _idTopic, content, author } = request.body;
    const comment: CommentInterface = { content, author };

    const commentRepository = new CommentRepository();
    const commentService = new CommentService(commentRepository);
    const commentID = await commentService.create(_idTopic, comment);

    return response.status(201).json(commentID);
  }
}

export { CommentController };
