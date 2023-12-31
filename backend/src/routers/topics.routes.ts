import { Router } from "express";
import { TopicsController } from "../controllers/topics.controller";

const topicsRouter = Router();

const topicsController = new TopicsController();

topicsRouter.post("/", topicsController.create);
topicsRouter.get("/", topicsController.index);
topicsRouter.put("/", topicsController.update);
topicsRouter.post("/findById", topicsController.findById);

export { topicsRouter };
