import { ObjectId } from "mongoose";
import { CommentInterface } from "./comment.interfaces";

export interface TopicsInterface {
  title: string;
  content: string;
  socket: string;
  author: {
    _id: ObjectId;
    name: string;
  };
  createdAt: Date;
  comments: CommentInterface[];
}
