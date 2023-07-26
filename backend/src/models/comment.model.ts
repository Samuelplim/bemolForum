import mongoose, { Schema } from "mongoose";
import { CommentInterface } from "../interfaces";

export const commentSchema = new Schema<CommentInterface>({
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  post: { type: Schema.Types.ObjectId, ref: "ForumPost", required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Comment = mongoose.model<CommentInterface>(
  "Comment",
  commentSchema
);
