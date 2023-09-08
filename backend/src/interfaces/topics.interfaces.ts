import { ObjectId } from "mongoose";
import { CommentInterface } from "./comment.interfaces";

export interface TopicsInterface {
  _id: ObjectId;
  title: string;
  content: string;
  socket_id: string;
  customersActives: Array<string>;
  author: {
    _id: ObjectId;
    name: string;
  };
  createdAt: Date;
  comments: CommentInterface[];
}
