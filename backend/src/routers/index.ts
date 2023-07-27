import { Router } from "express";
import { healthRouter } from "./health.routes";
import { customerRouter } from "./customer.routes";
import { sessionsRouter } from "./sessions.routes";

const routers = Router();
routers.use("/health", healthRouter);
routers.use("/customer", customerRouter);
routers.use("/sessions", sessionsRouter);

export { routers };
