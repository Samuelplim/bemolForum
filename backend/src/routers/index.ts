import { Router } from "express";
import healthRouter from "./health.routes";

const routers = Router();
routers.use("/health", healthRouter);

export default routers;
