import mongoose, { Schema } from "mongoose";
import { CustomerInterface } from "../interfaces";

export const customerSchema = new Schema<CustomerInterface>({
  name: { type: String },
  email: { type: String },
  cpf: { type: String },
  password: { type: String },
  address: { type: String },
  createdAt: { type: Date, default: new Date() },
});

export const Customer = mongoose.model<CustomerInterface>(
  "Customer",
  customerSchema
);
