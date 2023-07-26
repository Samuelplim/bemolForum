import mongoose, { Schema } from "mongoose";
import { ForumPostInterface } from "../interfaces";

export const forumPostSchema = new Schema<ForumPostInterface>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId },
  createdAt: { type: Date, default: Date.now },
});

export const ForumPost = mongoose.model<ForumPostInterface>(
  "ForumPost",
  forumPostSchema
);
