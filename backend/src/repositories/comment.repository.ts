import { CommentInterface } from "../interfaces";
import { Topics } from "../models/topics.model";

class CommentRepository {
  create(topicID: number, comment: CommentInterface) {
    return Topics.updateOne({ _id: topicID }, { $push: { comments: comment } });
  }

  update(topicID: number, comment: Partial<CommentInterface>) {
    return Topics.updateOne({ _id: topicID }, { $set: { comments: comment } });
  }

  remove(topicID: number, commentID: number) {
    return Topics.updateOne(
      { _id: topicID },
      { $pull: { comments: { _id: commentID } } }
    );
  }
}

export { CommentRepository };
