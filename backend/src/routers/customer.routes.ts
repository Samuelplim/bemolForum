import { Router } from "express";
import { CustomerController } from "../controllers/customer.controller";

const customerRouter = Router();

const customerController = new CustomerController();

customerRouter.post("/", customerController.create);
customerRouter.get("/", customerController.findByEmail);
customerRouter.delete("/", customerController.remove);

export { customerRouter };
