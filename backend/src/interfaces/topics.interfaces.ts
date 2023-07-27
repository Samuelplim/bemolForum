import { CommentInterface } from "./comment.interfaces";

export interface TopicsInterface {
  title: string;
  content: string;
  author: {};
  createdAt: Date;
  comments: CommentInterface[];
}
