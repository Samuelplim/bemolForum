import { Router } from "express";
import { healthRouter } from "./health.routes";
import { customerRouter } from "./customer.routes";

const routers = Router();
routers.use("/health", healthRouter);
routers.use("/customer", customerRouter);

export { routers };
