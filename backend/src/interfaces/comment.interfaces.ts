import { ObjectId } from "mongoose";

export interface CommentInterface {
  content: string;
  author: {
    _id: ObjectId;
    name: string;
  };
  createdAt?: Date;
}
