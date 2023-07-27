import { Router } from "express";
import { TopicsController } from "../controllers/topics.controller";

const topicsRouter = Router();

const topicsController = new TopicsController();

topicsRouter.post("/", topicsController.create);

export { topicsRouter };
