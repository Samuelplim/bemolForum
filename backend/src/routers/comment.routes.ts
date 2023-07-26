import { Response, Router } from "express";
import { RequestInterface } from "../interfaces";

const commentRouter = Router();

commentRouter.get("/", (req: RequestInterface, res: Response) => {
  req.io.emit("");
});

export default commentRouter;
