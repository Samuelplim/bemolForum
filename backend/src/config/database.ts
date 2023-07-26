import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const databaseUrl = process.env.DATABASE_URL || "";

export default mongoose.connect(databaseUrl);
