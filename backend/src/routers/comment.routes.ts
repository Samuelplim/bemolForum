import { Router } from "express";
import { CommentController } from "../controllers/comment.controller";

const commentRouter = Router();

const customerController = new CommentController();

commentRouter.post("/", customerController.create);

export { commentRouter };
