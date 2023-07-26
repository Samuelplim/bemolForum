import { Request, Response, Router } from "express";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  const helthCheck = { message: "Aplicação funcionando com sucesso!" };
  res.send(helthCheck);
});

export default routes;
