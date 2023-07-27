import { Request, Response, Router } from "express";

const healthRouter = Router();

healthRouter.get("/", (req: Request, res: Response) => {
  const helthCheck = { message: "Aplicação funcionando com sucesso!" };
  res.send(helthCheck);
});

export { healthRouter };
