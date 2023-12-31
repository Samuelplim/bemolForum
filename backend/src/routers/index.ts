import { Router } from "express";
import { healthRouter } from "./health.routes";
import { customerRouter } from "./customer.routes";
import { sessionsRouter } from "./sessions.routes";
import { topicsRouter } from "./topics.routes";
import { commentRouter } from "./comment.routes";

const routers = Router();
routers.use("/health", healthRouter);
routers.use("/customer", customerRouter);
routers.use("/sessions", sessionsRouter);
routers.use("/topics", topicsRouter);
routers.use("/comments", commentRouter);

export { routers };
