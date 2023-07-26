import mongoose, { Schema } from "mongoose";
import { ChatMessageInterface } from "../interfaces";

export const chatMessageSchema = new Schema<ChatMessageInterface>({
  content: { type: String, required: true },
  sender: { type: Schema.Types.ObjectId, ref: "User", required: true },
  receiver: { type: Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
});

export const ChatMessage = mongoose.model<ChatMessageInterface>(
  "chatMessage",
  chatMessageSchema
);
