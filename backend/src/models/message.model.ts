import mongoose, { Schema } from "mongoose";
import { MessageInterface } from "../interfaces";

export const MessageSchema = new Schema<MessageInterface>({
  content: { type: String, required: true },
  sender: { type: Schema.Types.ObjectId, ref: "User", required: true },
  receiver: { type: Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Message = mongoose.model<MessageInterface>(
  "Message",
  MessageSchema
);
