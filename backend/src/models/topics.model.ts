import mongoose, { Schema } from "mongoose";
import { TopicsInterface } from "../interfaces";

export const topicsSchema = new Schema<TopicsInterface>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: {
    _id: { type: Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
  },
  createdAt: { type: Date, default: Date.now },
  comments: [
    {
      content: { type: String },
      author: {
        _id: { type: Schema.Types.ObjectId, required: true },
        name: { type: String, required: true },
      },
      createdAt: { type: Date, default: Date.now },
    },
  ],
});

export const Topics = mongoose.model<TopicsInterface>("Topics", topicsSchema);
