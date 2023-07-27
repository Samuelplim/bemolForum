import { CommentInterface } from "../interfaces";
import { AppError } from "../utils/AppError";

class CommentService {
  commentRepository: any;

  constructor(commentRepository: any) {
    this.commentRepository = commentRepository;
  }

  async create(topicID: number, comment: CommentInterface) {
    const commentID = await this.commentRepository.create(topicID, comment);

    return commentID;
  }
}

export { CommentService };
