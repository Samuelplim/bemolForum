import mongoose, { Schema } from "mongoose";
import { TopicsInterface } from "../interfaces";

export const topicsSchema = new Schema<TopicsInterface>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId },
  createdAt: { type: Date, default: Date.now },
});

export const Topics = mongoose.model<TopicsInterface>("Topics", topicsSchema);